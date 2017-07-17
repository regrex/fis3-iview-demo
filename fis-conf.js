/**
 * @file fis-config for this project
 * @author dengxi
 */
const otpPrefix = 'd';
const prodId = 'baike';
const conf = {
    modName: 'operatemis',
    host: 'http://' + otpPrefix + '.' + prodId + '.otp.baidu.com',
    staticHost: 'http://' + otpPrefix + '.static.' + prodId + '.otp.baidu.com',
    cdnHost: 'https://' + prodId + '.bdstatic.com',
    // staticPath: '/home/work/static/static.'+ prodId +'.baidu.com/webroot',
    staticPath: '/home/work/orp/webroot',
    tplPath: '/home/work/orp/template'
};

// 需要构建的文件
fis.set('project.fileType.text', 'vue,map');
fis.set('project.files', ['src/**']);
fis.set('namespace', conf.modName);

// 模块化支持插件
fis.hook('commonjs', {
    extList: [
        '.js', '.coffee', '.es6', '.jsx', '.vue'
    ],
    umd2commonjs: true
});

// 禁用components，启用node_modules
fis.unhook('components');
fis.hook('node_modules');

// 依赖的库文件设置成模块化
fis.match('/{node_modules,/client}/**.js', {
    isMod: true,
    useSameNameRequire: true
});

// 所有js文件
fis.match('src/**.js', {
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
    parser: [
        fis.plugin('babel-6.x', {
            presets: ['es2015-loose', 'react', 'stage-3']
        }),
        fis.plugin('translate-es3ify', null, 'append')
    ]
});

// 非js模块文件
fis.match('static/js/engine/mod.js', {
    parser: null,
    isMod: false
});

fis.match('src/main.js', {
    isMod: false
});

// 编译vue组件
fis.match('src/**.vue', {
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
    parser: [
        fis.plugin('vue-component', {
            runtimeOnly: true,
            extractCSS: true,
            cssScopedFlag: null
        })
    ]
});

// vue组件里的js处理
fis.match('src/**.vue:js', {
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
    parser: [
        fis.plugin('babel-6.x', {
            presets: ['es2015-loose', 'react', 'stage-3']
        }),
        fis.plugin('translate-es3ify', null, 'append')
    ]
});

// vue组件里的tpl模板处理
fis.match('src/**.vue:jade', {
    parser: [
        fis.plugin('jade', {
            //
        })
    ]
});

// vue组件里的css处理
fis.match('src/{**.vue:less,**.less}', {
    rExt: 'css',
    parser: [fis.plugin('less-2.x')],
    postprocessor: fis.plugin('autoprefixer')
});

// css和image的import支持
fis.match('*.{js,jsx,ts,tsx,es,vue}', {
    preprocessor: [
        fis.plugin('js-require-css'),
        fis.plugin('js-require-file', {
            useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64
        })
    ]
});

// 修改发布文件路径
fis.match('src/(**)', {
    release: '/static/' + conf.modName + '/$1'
}).match('static/(**)', {
    release: '/static/' + conf.modName + '/$1'
}).match('node_modules/(**)', {
    release: '/static/' + conf.modName + '/$1'
}).match('src/index.html', {
    isHtmlLike: true,
    rExt: '.html',
    release: '/' + conf.modName + '/' + conf.modName + '.html'
});

// 纯前端的项目，用 loader 来自动引入资源。
fis.match('::package', {
    // 开启 css sprite
    spriter: fis.plugin('csssprites', {
        // 图之间的边距
        margin: 10,
        // 使用矩阵排列方式，默认为线性`linear`
        layout: 'matrix'
    }),
    postpackager: fis.plugin('loader')
});

// ======== 远程部署环境配置 Begin =========
const test = fis.media('test');

// 静态资源引用路径换成绝对路径
test.match('*.{js,ts,tsx,jsx,es,es6,css,scss,less,png,jpg,jpeg,gif,bmp,eot,svg,ttf,woff,woff2}', {
    domain: conf.staticHost
});

// 静态资源push到远程
test.match('**', {
    deploy: [
        fis.plugin('local-deliver', {
            to: './output'
        }),
        fis.plugin('http-push', {
            receiver: conf.host + '/receiver.php',
            to: conf.staticPath
        })
    ]
});

// 模板文件push到远程
test.match('src/index.html', {
    rExt: '.tpl',
    deploy: [
        fis.plugin('local-deliver', {
            to: './output'
        }),
        fis.plugin('http-push', {
            receiver: conf.host + '/receiver.php',
            to: conf.tplPath
        })
    ],
    release: '/' + conf.modName + '/' + conf.modName + '.tpl'
});
// ======== 远程部署环境配置 End =========


// ======== 生产上线环境配置 Begin =========
const prod = fis.media('prod');

// 静态资源引用路径换成线上cdn绝对路径
prod.match('*.{css,less,scss,js,jsx,ts,tsx,es,es6}', {
    domain: conf.cdnHost
});

prod.match('::image', {
    domain: conf.cdnHost
});

// 压缩 css
prod.match('*.{css,scss,less}', {
    optimizer: fis.plugin('clean-css')
});

// 针对以下下文件，开启文件 hash
prod.match('*.{ts,tsx,js,jsx,es,es6,css,scss,png,jpg,jpeg,gif,bmp,eot,svg,ttf,woff,woff2}', {
    useHash: true
});

// png图片压缩
prod.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});

// 压缩内嵌在页面里面的 js 文件。
prod.match('*:js', {
    optimizer: fis.plugin('uglify-js')
});

// 压缩 js 文件。
prod.match('*.{ts,tsx,js,jsx,es,es6}', {
    optimizer: fis.plugin('uglify-js')
});

prod.match('::package', {
    packager: fis.plugin('deps-pack', {
        'static/pkg/aio.js': [
            'src/main.js',
            'src/main.js:deps',
            '!node_modules/**.js',
            '!node_modules/**.js:deps'
        ],
        'static/pkg/aio_thirdpart.js': [
            'node_modules/**.js',
            'node_modules/**.js:deps',
            'node_modules/**.jsx',
            'node_modules/**.jsx:deps'
        ],
        'static/pkg/aio.css': [
            'src/**.css',
            'src/**.less',
            'src/**.less:deps'
        ],
        'static/pkg/aio_thirdpart.css': [
            'node_modules/**.css',
            'node_modules/**.less',
            'node_modules/**.less:deps'
        ]
    })
});

prod.match('**', {
    deploy: [
        fis.plugin('local-deliver', {
            to: './output'
        })
    ]
});

prod.match('src/index.html', {
    rExt: '.tpl',
    deploy: [
        fis.plugin('local-deliver', {
            to: './output'
        })
    ],
    release: '/template/' + conf.modName + '/' + conf.modName + '.tpl'
});
// ======== 生产上线环境配置 End =========
