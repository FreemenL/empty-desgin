interface FileRequire {
    (url: string): any,
    [propName: string]: any
  }
  
  interface System {
    import<T = any>(module: string): Promise<T>
  }
  
  declare let TcPlayer:any;
  declare let flowplayer:any;
  declare let _: any;
  declare let G6: any;
  declare let html2canvas: any;
  declare let AMap: any;
  declare let hot:any;
  declare let module: any;
  declare let process: any;
  declare let System: System;
  declare let require: FileRequire;
  
  declare module '*.svg'
  declare module '*.png'
  declare module '*.jpg'
  declare module 'redux-persist';
  declare module 'react-hot-loader';
  
  declare module "*.css" {
    const content: {
      [propName: string]: any
    };
    export default content;
  }
  
  declare module "*.scss" {
    const content: any;
    export default content;
  }
  
  declare module "*.less" {
    const content: any;
    export default content;
  }
  
  declare module "*.json" {
    const content: object;
    export default content;
  }
  