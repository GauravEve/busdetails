module.exports = {
    ci: {
      upload: {
        target: 'temporary-public-storage',
      },
      collect:{
        staticDistDir: './build',
      },
      assert: {
        preset: 'lighthouse:no-pwa',
            // preset:'lighthouse:recommended',
        assertions: {
          'csp-xss': 'off',
          "bf-cache":"off",
          "canonical":"off",
          "color-contrast":"off",
          "tap-targets":"off",
          "unused-javascript":"off",
          "render-blocking-resources":"Off",
          "uses-long-cache-ttl":"off",
          'categories:performance': ['error', { minScore: 0.95 }],
          'categories:accessibility': ['error', { minScore: 0.95 }],
          'categories:best-practices': ['error', { minScore: 0.95 }],
          'categories:seo': ['error', { minScore: 1 }],
        },
      },
    },
  };
  