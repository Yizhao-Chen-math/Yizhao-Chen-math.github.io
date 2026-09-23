// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications-amp-preprints",
          title: "Publications &amp; Preprints",
          description: "My publications and preprints are listed below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications&preprints/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "The following are the courses which I taught or in which I served as a teaching assistant.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-writing-operators-as-sum-of-commutators",
      
        title: "Writing Operators as Sum of Commutators",
      
      description: "A review on Anderson and Vaserstein&#39;s paper.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/posts/Writing%20Operators%20as%20Sum%20of%20Commutators.pdf";
        
      },
    },{id: "post-spin-representation-and-fermions-in-chinese",
      
        title: "Spin Representation and Fermions(In Chinese)",
      
      description: "We describe a case where the irreducible representation of Clifford algebras &quot;naturally&quot; appear - the creation and annihilation operators acting on the space of quantum states of many-fermion system.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/Spin-Representation-and-Fermions/";
        
      },
    },{id: "post-magnetic-monopole-and-quantization-of-magnetic-charge-in-chinese",
      
        title: "Magnetic Monopole and Quantization of Magnetic Charge(In Chinese)",
      
      description: "We summary two ways to deduce quantization of magnetic charge, One adapted from Dirac&#39;s original idea, and another with gauge theory point of view.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/Magnetic-Monopole-and-Quantization-of-Magnetic-Charge(In-Chinese)/";
        
      },
    },{id: "post-a-little-of-galois-theory-how-to-solve-equations-in-chinese",
      
        title: "A Little of Galois Theory-How to Solve Equations(In Chinese)",
      
      description: "A note on how to solve algebraic equations, following the idea of Galois. This is tending to advanced high school students with few knowledge of group theory and field extensions.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/A-Little-of-Galois-Theory-How-to-Solve-Equations(in-Chinese)/";
        
      },
    },{id: "post-topological-proof-of-bézout-theorem",
      
        title: "Topological Proof of Bézout Theorem",
      
      description: "Provide a proof of Bézout&#39;s theorem (in the complex field), using intersection form of homology classes.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/posts/Topological%20Proof%20of%20Bezout%20Theorem.pdf";
        
      },
    },{id: "post-non-existence-of-tensor-product-of-hilber-spaces",
      
        title: "Non-existence of Tensor Product of Hilber Spaces",
      
      description: "We give a proof of that there is no space satisfying the naive analogy of unversal property of the (algebraic) tensor product.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/posts/Non-existence%20of%20Tensor%20Product%20of%20Hilber%20Spaces.pdf";
        
      },
    },{id: "post-function-on-surfaces-with-3-critical-points-in-chinese",
      
        title: "Function on Surfaces With 3 Critical Points(In Chinese)",
      
      description: "Provide some explanation for Banchoff&#39;s construction of functions on surfaces with 3 critical points.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Function-on-Surfaces-With-3-Critical-Points(In-Chinese)/";
        
      },
    },{id: "post-an-application-of-the-uniform-boundedness-principle-on-the-continuity-of-lie-group-39-s-representations-in-chinese",
      
        title: "An Application of the Uniform Boundedness Principle - On the Continuity of Lie...",
      
      description: "Provide an application of the uniform boundedness principle that is not so &quot;analytic&quot;.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/An-Application-of-the-Uniform-Boundedness-Principle-On-the-Continuity-of-Lie-Group's-Representations(In-Chinese)/";
        
      },
    },{id: "post-why-caring-about-space-of-connections-an-example-of-gauge-theories-in-chinese",
      
        title: "Why Caring About Space of Connections - An Example of Gauge Theories(In Chinese)...",
      
      description: "Try to explain why mathematicians&#39; gauge theory are interested in the set of all connections over a principal bundle,using the electromagnetic field as the simplest example.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/posts/%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%B1%82%E8%A7%A3%E8%81%94%E7%BB%9C.pdf";
        
      },
    },{id: "post-first-integrals-of-hamiltonian-systems-and-reduction-of-dimension-in-chinese",
      
        title: "First Integrals of Hamiltonian Systems and Reduction of Dimension(In Chinese)",
      
      description: "A geometric way to reduce the dimension of a Hamiltonian system with a first integral, together with some explanation on proof of Darboux&#39;s theorem.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/First-Integrals-of-Hamiltonian-Systems-and-Reduction-of-Dimension(In-Chinese)/";
        
      },
    },{id: "post-hofer-zehnder-capacity-and-proof-of-gromov-39-s-non-squeezing-theorem-in-chinese",
      
        title: "Hofer-Zehnder Capacity And Proof of Gromov&#39;s Non-squeezing Theorem(In Chinese)",
      
      description: "This note records a proof of Gromov&#39;s non-squeezing theorem, using the Hofer-Zehnder capacity. This proof mostly follows the one given by Hofer and Zehnder, except some slight modifications.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/posts/Hofer-Zehnder%E5%AE%B9%E9%87%8F%E4%B8%8EGromov%E4%B8%8D%E5%8F%AF%E5%8E%8B%E7%BC%A9%E5%AE%9A%E7%90%86%E7%9A%84%E8%AF%81%E6%98%8E.pdf";
        
      },
    },{id: "post-bourgain-39-s-trick-from-boundedness-to-existence-in-chinese",
      
        title: "Bourgain&#39;s Trick-From Boundedness to Existence(In Chinese)",
      
      description: "This note records a trick in Bourgain&#39;s papers, which uses dual spaces and Hahn-Banach theorem to show existence of certain objects.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Bourgain's-Trick-From-Boundedness-to-Existence/";
        
      },
    },{id: "post-a-collection-of-baker-campbell-hausdorff-type-formulas-in-chinese",
      
        title: "A Collection of Baker-Campbell-Hausdorff-Type formulas(In Chinese)",
      
      description: "A collection of formulas similar to Baker-Campbell-Hausdorff formula and their proofs (which are simpler than that of BCH formula).",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/A-Collection-of-Baker-Campbell-Hausdorff-Type-Formulas/";
        
      },
    },{id: "post-heat-equation-and-path-integral-from-stochastic-point-of-view-in-chinese",
      
        title: "Heat Equation and Path Integral From Stochastic Point of View(In Chinese)",
      
      description: "We show the relation between the Brownian motion and heat equation, and we give a path integral interpretation of a solution of heat equation.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/posts/%E9%9A%8F%E6%9C%BA%E8%BF%87%E7%A8%8B%E8%A7%86%E8%A7%92%E4%B8%8B%E7%9A%84%E7%83%AD%E6%96%B9%E7%A8%8B%E4%B8%8E%E8%B7%AF%E5%BE%84%E7%A7%AF%E5%88%86.pdf";
        
      },
    },{id: "post-existence-of-almost-complex-structure-on-spheres-in-chinese",
      
        title: "Existence of Almost Complex Structure on Spheres(In Chinese)",
      
      description: "This note records the proof that there is no almost complex structure on sphere unless its dimension is 2 or 6.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/posts/%E7%90%83%E9%9D%A2%E4%B8%8A%E8%BF%91%E5%A4%8D%E7%BB%93%E6%9E%84.pdf";
        
      },
    },{id: "post-notes-on-feynman-integral-and-feynman-diagram-in-chinese",
      
        title: "Notes on Feynman Integral and Feynman Diagram(In Chinese)",
      
      description: "A note on the deductions of the path integral and the Feynman diagram.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/posts/Feynman%E7%A7%AF%E5%88%86%E5%92%8CFeynman%E5%9B%BE.pdf";
        
      },
    },{id: "post-compact-lie-groups-as-boundaries-of-manifolds-in-chinese",
      
        title: "Compact Lie Groups as Boundaries of Manifolds(In Chinese)",
      
      description: "A constructive proof that every Lie group is the boundary of certain smooth manifold.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Compact-Lie-Groups-as-Boundaries-of-Manifolds/";
        
      },
    },{id: "post-three-counterexamples-about-mayer-vietoris-sequence-in-chinese",
      
        title: "Three Counterexamples About Mayer-Vietoris Sequence(In Chinese)",
      
      description: "When certain conditions are removed, there are examples where the Mayer-Vietoris sequence does not hold, where the excision theorem does not hold and where the homology groups of a pair of spaces is not isomorphic to that of the quotient space.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/posts/%E5%85%B3%E4%BA%8EM-V%E5%BA%8F%E5%88%97%E7%9A%84%E4%B8%89%E4%B8%AA%E5%8F%8D%E4%BE%8B.pdf";
        
      },
    },{id: "post-notes-on-spectral-sequence-double-complex-derived-functor-and-universal-coefficient-theorem-in-chinese",
      
        title: "Notes on Spectral Sequence, Double Complex, Derived Functor and Universal Coefficient Theorem(In Chinese)...",
      
      description: "Prove some results related to derived functors and universal coefficient theorem using spectral sequences.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/posts/%E8%B0%B1%E5%BA%8F%E5%88%97%E3%80%81%E5%8F%8C%E5%A4%8D%E5%BD%A2%E4%B8%8E%E5%AF%BC%E5%87%BA%E5%87%BD%E5%AD%90%E3%80%81%E4%B8%87%E6%9C%89%E7%B3%BB%E6%95%B0%E5%AE%9A%E7%90%86.pdf";
        
      },
    },{id: "post-proof-of-the-hodge-decomposition-on-riemannian-manifolds-in-chinese",
      
        title: "Proof of the Hodge Decomposition on Riemannian Manifolds(In Chinese)",
      
      description: "This note records a proof of Hodge decomposition on Riemannian manifolds. We view the Laplacian as the square of a Dirac operator, which is unbounded and self-adjoint. And we prove the theorem by showing that its &quot;inverse&quot; is compact.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/posts/%E9%BB%8E%E6%9B%BC%E6%B5%81%E5%BD%A2%E4%B8%8AHodge%E5%88%86%E8%A7%A3%E7%9A%84%E8%AF%81%E6%98%8E.pdf";
        
      },
    },{id: "post-deduction-of-morse-inequality-perfect-morse-function-and-decomposition-into-derict-sum-in-chinese",
      
        title: "Deduction of Morse Inequality, Perfect Morse Function and Decomposition into Derict Sum(In Chinese)...",
      
      description: "Some notes when learning Morse theory for the second time.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Deduction-of-Morse-Inequality-Perfect-Morse-Function-and-Decomposition-into-Derict-Sum/";
        
      },
    },{id: "post-simplex-decomposition-of-product-of-singular-simplexes-in-chinese",
      
        title: "Simplex Decomposition of Product of Singular Simplexes(In Chinese)",
      
      description: "Construct a concrete simplex decomposition of product of singular simplexes with an intuitive proof.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Simplex-Decomposition-of-Product-of-Singular-Simplexes/";
        
      },
    },{id: "post-three-ways-to-think-of-connections-on-vector-bundles-in-chinese",
      
        title: "Three Ways to Think of Connections on Vector Bundles(In Chinese)",
      
      description: "To record three usual ways to think of connections on vecter bundles.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Three-Ways-to-Think-of-Connections-on-Vector-Bundles/";
        
      },
    },{id: "post-bounded-operators-can-not-satisfy-canonical-commutative-relation-in-chinese",
      
        title: "Bounded Operators Can Not Satisfy Canonical Commutative Relation(In Chinese)",
      
      description: "The proof of the fact that two bounded operators can not satisfy the C.C.R.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Bounded-Operators-Can-Not-Satisfy-Canonical-Commutative-Relation/";
        
      },
    },{id: "post-initiation-to-convergence-theory-in-chinese",
      
        title: "Initiation to Convergence Theory(In Chinese)",
      
      description: "A very brief introduction to notions in convergence theory.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Initiation-to-Convergence-Theory/";
        
      },
    },{id: "post-comments-on-coalgebra",
      
        title: "Comments on Coalgebra",
      
      description: "Provide some motivations and examples for the coalgebra.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comments-on-Coalgebra/";
        
      },
    },{id: "post-quot-odd-dimensional-quot-approach-to-hamiltonian-phase-flow",
      
        title: "&quot;Odd-dimensional&quot; Approach to Hamiltonian Phase Flow",
      
      description: "This is a short note on the chapter 9 in the book Mathematical Methods of Classical Mechanics by Arnold.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Odd-dimensional-Approach-to-Hamiltonian-Phase-Flow/";
        
      },
    },{id: "teaching-advanced-mathematics-a-i",
          title: 'Advanced Mathematics A(I)',
          description: "From Sept. 2024 to Dec. 2024(as teaching assistant)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2024-autumn-Advanced-Mathematics-A-I/";
            },},{id: "teaching-advanced-mathematics-a-ii",
          title: 'Advanced Mathematics A(II)',
          description: "From Feb. 2025 to Jun. 2025(as teaching assistant)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2025-spring-Advanced-Mathematics-A-II/";
            },},{id: "teaching-advanced-mathematics-a-ii",
          title: 'Advanced Mathematics A(II)',
          description: "From Mar. 2026 to Jun. 2026(as teaching assistant)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2026-spring-Advanced-Mathematics-A-II/";
            },},{id: "teaching-advanced-mathematics-a-i",
          title: 'Advanced Mathematics A(I)',
          description: "From Sept. 2026 to Dec. 2026(as teaching assistant)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2026-autumn-Advanced-Mathematics-A-I-copy/";
            },},{id: "teaching-lecture-note-for-recitation-session",
          title: 'Lecture Note for Recitation Session',
          description: "Collection of my lecture note for the recitation session of the course Advanced Mathematics.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Lecture-Note-for-Recitation-Session/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
