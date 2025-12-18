---
layout: home
title: Meritpoint Pathways
permalink: /Meritpoint/
description: MeritPoint Pathways helps you plan education and careers with step-by-step guidance on programs, funding (OSAP), and career pathways.
---

# MeritPoint Pathways

## Education & Career Planning — Step by Step

MeritPoint Pathways helps **students**, **working professionals**, **career switchers**, and **older adults** make confident decisions about education and career direction—using clear roadmaps, practical timelines, and honest guidance.

**Free consultation • No upfront fees**  
Based in **Mississauga, Ontario (Canada)**

[Book a Free Consultation]({{ "/contact/" | relative_url }}) &nbsp;•&nbsp; [Explore Career Pathways]({{ "/career-pathways/" | relative_url }})

---

## What we help with

### Program & Career Planning
Choose the right program and build a realistic plan based on your goals, background, and timeline.

### Funding Guidance (OSAP & more)
Understand what may apply to you and what you need to prepare. Funding and coverage vary by person and program—our job is to make it clear.

### Career Pathways Library
Step-by-step guides across **Skilled Trades**, **Healthcare**, and **STEM & Professional Designations**—built to be easy to follow and supported by official references where relevant.

### Job Readiness & Career Progression
Practical guidance for job search direction, role targeting, and next steps after training.

---

## Start here (quick links)

- **Services:** what we do and how we support you  
  → [View Services]({{ "/services/" | relative_url }})

- **Career Pathways:** browse step-by-step roadmaps  
  → [Browse Career Pathways]({{ "/career-pathways/" | relative_url }})

- **Funding:** OSAP and other guidance (eligibility varies)  
  → [Funding & Eligibility Guidance]({{ "/funding/" | relative_url }})

- **Employers:** hiring and talent matching support  
  → [For Employers]({{ "/employers/" | relative_url }})

---

timeline:
  title: "How It Works"
  text: "A simple process from first call to next steps."
  section: timeline
  events:
    - title: "Free consultation"
      year: ""
      desc: "Share your goal and background. We clarify options and next steps."
      image: "/assets/img/timeline/1.jpg"
      alt: "Consultation"

    - title: "Plan & eligibility"
      year: ""
      desc: "We review program fit and funding direction (where applicable)."
      image: "/assets/img/timeline/2.jpg"
      alt: "Planning"

    - title: "Step-by-step roadmap"
      year: ""
      desc: "You get a clear checklist, timeline, and what to do next."
      image: "/assets/img/timeline/3.jpg"
      alt: "Roadmap"

    - title: "Support through action"
      year: ""
      desc: "We help you move forward with applications and career progress."
      image: "/assets/img/timeline/4.jpg"
      alt: "Support"

---

## Contact

Ready to start?

- **Phone:** 437-882-3664  
- **Email:** info@meritpoint.ca  
- **Website:** MeritPoint.ca  

→ Go to the [Contact page]({{ "/contact/" | relative_url }}) to send a request or book a free consultation.
<script>
(function () {
  // Fallback toggle (works even if Bootstrap JS isn't loading)
  function getTarget(btn) {
    var sel = btn.getAttribute('data-bs-target') || btn.getAttribute('data-target');
    if (sel) return document.querySelector(sel);
    return document.querySelector('#navbarResponsive') || document.querySelector('.navbar-collapse');
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.navbar-toggler');
    if (!btn) return;

    e.preventDefault();

    var target = getTarget(btn);
    if (!target) return;

    target.classList.toggle('show');

    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  }, true);
})();
</script>
