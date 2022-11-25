import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import {loadEnv} from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    return {
        clearScreen: false,
        server: {
            hmr: {overlay: false}, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
            port: 5003, // 类型： number 指定服务器端口;
            open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
            cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
            host: true,
            https: false,//whether open https 开启https首次运行比较慢 且有个输入密码过程
            //proxy look for https://vitejs.cn/config/#server-proxy
            proxy: {
                '/api': {
                    target: loadEnv(mode, process.cwd()).VITE_APP_PROXY_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '/api/')
                }
            }
        },
        preview: {
            port: 5003,
            host: true,
            strictPort: true
        },
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@utils': path.resolve(__dirname, 'src/utils'),
                '@assets': path.resolve(__dirname, 'src/assets'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@api': path.resolve(__dirname, 'src/api'),
                '@components': path.resolve(__dirname, 'src/components'),
            }
        }
    }
})
