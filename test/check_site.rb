# frozen_string_literal: true

# Regression checks against the site's pre-migration published routes.
require "json"
require "nokogiri"
require "addressable/uri"

root = File.expand_path("..", __dir__)
destination = File.expand_path(ARGV.fetch(0, "_site"), root)
manifest = JSON.parse(File.read(File.join(__dir__, "site-routes.json")))
failures = []
manifest.fetch("paths").each do |path|
  failures << "Missing published route: #{path}" unless File.file?(File.join(destination, path))
end

site_url = "https://Yizhao-Chen-math.github.io"
pages = manifest.fetch("paths").grep(/\.html\z/).reject { |path| path.start_with?("assets/") }
checked_links = 0
pages.each do |path|
  next unless File.file?(File.join(destination, path))

  document = Nokogiri::HTML(File.read(File.join(destination, path)))
  route = path.sub(/index\.html\z/, "")
  canonical = document.at_css('link[rel="canonical"]')&.[]("href")
  failures << "Wrong canonical URL: #{path}: #{canonical}" unless canonical && Addressable::URI.parse(canonical).normalize == Addressable::URI.parse("#{site_url}/#{route}").normalize
  failures << "Unrendered Liquid in #{path}" if document.text.include?("Liquid Exception")

  document.css("a[href], script[src], link[rel='stylesheet'][href], img[src]").each do |element|
    value = element["href"] || element["src"]
    next if value.nil? || value.empty? || value.start_with?("#", "data:", "mailto:", "javascript:")

    begin
      uri = Addressable::URI.join("#{site_url}/#{route}", value)
      next unless uri.host&.downcase == "yizhao-chen-math.github.io"

      target = Addressable::URI.unencode(uri.path.to_s).sub(%r{\A/}, "")
      file = File.join(destination, target)
      file = File.join(file, "index.html") if target.end_with?("/") || File.directory?(file)
      checked_links += 1
      failures << "Broken local link in #{path}: #{value}" unless File.file?(file)
    rescue Addressable::URI::InvalidURIError => error
      failures << "Invalid link in #{path}: #{value}: #{error.message}"
    end
  end
end

teaching = Nokogiri::HTML(File.read(File.join(destination, "teaching/index.html")))
cards = teaching.css(".teaching-card")
failures << "Teaching page must contain all five entries" unless cards.length == 5
dates = cards.map { |card| card["data-course-date"] }
failures << "Teaching entries are not newest first" unless dates == dates.sort.reverse

cv = Nokogiri::HTML(File.read(File.join(destination, "cv/index.html")))
failures << "CV did not render personal education" unless cv.text.include?("Peking University")
failures << "CV education years were lost during migration" unless cv.text.include?("2029") && cv.text.include?("2024")
failures << "CV still contains template example people" if cv.text.include?("Albert Einstein")

math_post = File.join(destination, "blog/2026/Spin-Representation-and-Fermions/index.html")
if File.file?(math_post)
  document = Nokogiri::HTML(File.read(math_post))
  failures << "MathJax is missing from the math post" unless document.css("script[src]").any? { |node| node["src"].include?("mathjax") }
end

abort failures.uniq.join("\n") unless failures.empty?
puts "Passed: #{manifest.fetch('paths').length} published routes, #{checked_links} local links, teaching order, CV and math assets."
