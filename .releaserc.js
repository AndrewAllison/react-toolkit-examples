module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',
    'next-major',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true }
  ],
  plugins: [
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "package-lock.json", "CHANGELOG.md"],
        "message": "release(version): Release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    {
      "releaseRules": [
        {
          "type": "feature",
          "release": "minor"
        },
        {
          "type": "style",
          "release": "patch"
        },
        {
          "type": "build",
          "release": "patch"
        },
        {
          "type": "perf",
          "release": "patch"
        },
        {
          "type": "prune",
          "release": "patch"
        },
        {
          "type": "ci",
          "release": "patch"
        },
        {
          "type": "quickfix",
          "release": "patch"
        },
        {
          "type": "chore",
          "release": "patch"
        },
        {
          "type": "docs",
          "release": "patch"
        },
        {
          "type": "deploy",
          "release": "patch"
        },
        {
          "type": "deploy",
          "release": "minor"
        },
        {
          "type": "refactor",
          "release": "patch"
        },
        {
          "type": "test",
          "release": "patch"
        },
        {
          "type": "security",
          "release": "patch"
        },
        {
          "type": "linux",
          "release": "patch"
        },
        {
          "type": "osx",
          "release": "patch"
        },
        {
          "type": "ios",
          "release": "patch"
        },
        {
          "type": "windows",
          "release": "patch"
        },
        {
          "type": "lint",
          "release": "patch"
        },
        {
          "type": "wip",
          "release": "no-release"
        },
        {
          "type": "fix-ci",
          "release": "patch"
        },
        {
          "type": "downgrade",
          "release": "minor"
        },
        {
          "type": "upgrade",
          "release": "minor"
        },
        {
          "type": "pushpin",
          "release": "patch"
        },
        {
          "type": "ci",
          "release": "patch"
        },
        {
          "type": "analytics",
          "release": "patch"
        },
        {
          "type": "refactoring",
          "release": "patch"
        },
        {
          "type": "docker",
          "release": "patch"
        },
        {
          "type": "dep-add",
          "release": "patch"
        },
        {
          "type": "dep-rm",
          "release": "patch"
        },
        {
          "type": "config",
          "release": "patch"
        },
        {
          "type": "i18n",
          "release": "patch"
        },
        {
          "type": "typo",
          "release": "patch"
        },
        {
          "type": "poo",
          "release": "patch"
        },
        {
          "type": "revert",
          "release": "minor"
        },
        {
          "type": "merge",
          "release": "patch"
        },
        {
          "type": "dep-up",
          "release": "patch"
        },
        {
          "type": "compat",
          "release": "minor"
        },
        {
          "type": "licence",
          "release": "patch"
        },
        {
          "type": "breaking",
          "release": "major"
        },
        {
          "type": "assets",
          "release": "patch"
        },
        {
          "type": "review",
          "release": "patch"
        },
        {
          "type": "access",
          "release": "patch"
        },
        {
          "type": "docs-code",
          "release": "patch"
        },
        {
          "type": "beer",
          "release": "no-release"
        },
        {
          "type": "texts",
          "release": "patch"
        },
        {
          "type": "db",
          "release": "minor"
        },
        {
          "type": "log-add",
          "release": "patch"
        },
        {
          "type": "log-add",
          "release": "patch"
        },
        {
          "type": "contrib-add",
          "release": "patch"
        },
        {
          "type": "ux",
          "release": "minor"
        },
        {
          "type": "arch",
          "release": "major"
        },
        {
          "type": "iphone",
          "release": "patch"
        },
        {
          "type": "clown-face",
          "release": "patch"
        },
        {
          "type": "egg",
          "release": "patch"
        },
        {
          "type": "see-no-evil",
          "release": "patch"
        },
        {
          "type": "camera-flash",
          "release": "patch"
        },
        {
          "type": "experiment",
          "release": "patch"
        },
        {
          "type": "seo",
          "release": "patch"
        },
        {
          "type": "k8s",
          "release": "patch"
        },
        {
          "type": "seed",
          "release": "patch"
        },
        {
          "type": "flags",
          "release": "patch"
        },
        {
          "type": "animation",
          "release": "patch"
        }
      ]
    }
  ]
};
