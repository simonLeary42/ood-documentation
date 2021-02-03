export default {
  "title": "Open OnDemand",
  "tagline": "Supercomputing. Seamlessly. Open, Interactive HPC Via the Web",
  "url": "https://open-ondemand-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "Open OnDemand",
  "projectName": "openOnDemandTemplate",
  "themeConfig": {
    "navbar": {
      "title": "Open OnDemand",
      "logo": {
        "alt": "My Project Logo",
        "src": "img/ood_sign.jpg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docusaurus",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "href": "https://github.com/OSC/Open-OnDemand",
          "label": "GitHub",
          "position": "left"
        },
        {
          "href": "https://osc.github.io/ood-documentation/latest/",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://discourse.osc.edu/c/open-ondemand",
          "label": "Discourse",
          "position": "left"
        },
        {
          "href": "https://figshare.com/authors/OH-TECH_Consortium/5131358",
          "label": "Figshares",
          "position": "left"
        },
        {
          "href": "https://twitter.com/open_ondemand",
          "label": "Twitter",
          "position": "left"
        },
        {
          "href": "https://lists.osu.edu/mailman/listinfo/ood-users",
          "label": "Join The News List",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Learn",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        },
        {
          "title": "Legal",
          "items": [
            {
              "label": "Privacy",
              "href": "https://opensource.facebook.com/legal/privacy/"
            },
            {
              "label": "Terms",
              "href": "https://opensource.facebook.com/legal/terms/"
            }
          ]
        }
      ],
      "logo": {
        "alt": "Facebook Open Source Logo",
        "src": "img/oss_logo.png",
        "href": "https://opensource.facebook.com"
      },
      "copyright": "Copyright © 2021 OOD Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/omerzulfiqar/OneDrive - Virginia Tech/ARC/oodTemp/ood-documentation/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/omerzulfiqar/OneDrive - Virginia Tech/ARC/oodTemp/ood-documentation/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};