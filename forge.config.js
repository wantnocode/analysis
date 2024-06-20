module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    // {
    //   // Windows 打包配置
    //   name: '@electron-forge/maker-squirrel',
    //   config: {
    //     name: 'my_electron_app',
    //     platform: 'win32',
    //     arch: 'x64',
    //   },
    // },
    // {
    //   // macOS 打包配置
    //   name: '@electron-forge/maker-dmg',
    //   config: {
    //     name: 'my_electron_app',
    //     format: 'zip',
    //   },
    // },
    // {
    //   // Linux 打包配置
    //   name: '@electron-forge/maker-deb',
    //   config: {
    //     name: 'my_electron_app',
    //     arch: 'amd64',
    //   },
    // },
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
