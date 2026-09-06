<!-- A4 — ARIA Map -->
<!-- Cinematic Edition for Northwild Mooncrest -->
<!-- Creator: John Robert -->

/* A4 — Cinematic ARIA Map */

const NW_ARIA_MAP = {
  landmarks: {
    header: {
      role: "banner",
      label: "Site Header"
    },
    navigation: {
      role: "navigation",
      label: "Primary Navigation"
    },
    main: {
      role: "main",
      label: "Main Content"
    },
    footer: {
      role: "contentinfo",
      label: "Site Footer"
    }
  },

  regions: {
    live: {
      id: "nw-live-region",
      role: "status",
      ariaLive: "polite",
      description: "Announces accessibility changes and system updates."
    },
    alerts: {
      id: "nw-alert-region",
      role: "alert",
      ariaLive: "assertive",
      description: "Announces urgent accessibility or system messages."
    }
  },

  controls: {
    highContrast: {
      id: "nw-high-contrast-toggle",
      role: "button",
      ariaPressed: false,
      label: "Toggle High Contrast Mode"
    },
    largeText: {
      id: "nw-large-text-toggle",
      role: "button",
      ariaPressed: false,
      label: "Toggle Large Text Mode"
    },
    dyslexia: {
      id: "nw-dyslexia-toggle",
      role: "button",
      ariaPressed: false,
      label: "Toggle Dyslexia-Friendly Mode"
    },
    motionReduction: {
      id: "nw-motion-reduction-toggle",
      role: "button",
      ariaPressed: false,
      label: "Toggle Motion Reduction Mode"
    },
    cognitiveLoad: {
      id: "nw-cognitive-load-toggle",
      role: "button",
      ariaPressed: false,
      label: "Toggle Reduced Cognitive Load Mode"
    }
  }
};

export default NW_ARIA_MAP;
