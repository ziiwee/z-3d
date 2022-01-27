# 费深 Threejs 封装库

## 1 快速上手

```typescript
//实例化观看器
const viewer = new Viewer(document.body, {
    brightness: 1,          //设置亮度
    background: "#ffffff"   //设置场景背景颜色
});
//加载模型
viewer.load(
    'https://dcm-mobile.dcm3d.com/profile/uploadP_91691607/右肺_Reduced.stl',
    progress => {
        console.log("加载进度：" + progress.percentage);
    }).then(model => {                  //初始化模型
        model.name = "右肺";         //设置模型名称
        model.color = "#FF0000"         //设置模型颜色
        model.opacity = 0.5;            //设置模型不透明度
        model.rotateX(-0.5 * Math.PI)   //使模型沿 X 轴旋转 90°
        model.rotateZ(Math.PI)          //使模型沿 Z 轴旋转 180°
        model.position.y = 800;
        model.position.z = 150;
    })

```

## 2 API

### 2.1 Viewer 观看器

| 属性/函数                                                                                   | 类型                        | 默认值 | 说明                                                           |
| ------------------------------------------------------------------------------------------- | --------------------------- | ------ | -------------------------------------------------------------- |
| new Viewer(container:HTMLElement,props?:IViewerProps)                                       | HTMLElement、`IViewerProps` |        | 构造函数                                                       |
| load(url:string,(progress:`IProgress`)=>void):Promise<IModel>                               | `IProgress`、`IModel`       |        | 加载一个模型                                                   |
| loadBatch(url:string,(progress:`IProgress`)=>void,(model:`IModel`)=>void):Promise<IModel[]> | `IProgress`、`IModel`       |        | 加载批量模型                                                   |
| findModelById(id: number):IModel                                                            |                             |        | 通过模型ID查找模型                                             |
| findModelByName(name: string):IModel[]                                                      |                             |        | 通过模型名称查询模型                                           |
| reInitControls()                                                                            |                             |        | 当加载完模型后，需要调用该方法重新初始化控制器，使模型居中显示 |
| reset()                                                                                     |                             |        | 复位                                                           |


### 2.2 IViewerProps 观看器构造函数参数对象  
| 属性         | 类型    | 默认值    | 说明                                |
| ------------ | ------- | --------- | ----------------------------------- |
| distance     | number  | 500       | 距离（摄像机与原点的距离）          |
| minDistance  | number  | 50        | 最小距离                            |
| maxDistance  | number  | 5000      | 最大距离                            |
| background   | string  | #000000   | 背景（场景的背景）                  |
| brightness   | number  | 1         | 亮度                   |
| enableHelper | boolean | false     | 是否启用辅助线                      |
| controls     | string  | 'default' | 控制器，可选值：'default' 、'orbit' |

### 2.3 IProgress 进度
| 属性       | 类型   | 默认值 | 说明     |
| ---------- | ------ | ------ | -------- |
| loaded     | number |        | 已加载量 |
| total      | number |        | 总量     |
| percentage | number |        | 百分比   |

### 2.4 IModel 模型
| 属性                  | 类型                                 | 默认值                | 说明                    |
| --------------------- | ------------------------------------ | --------------------- | ----------------------- |
| url                   | string                               |                       |                         |
| id                    | number                               |                       |                         |
| name                  | string                               |                       |                         |
| visible               | boolean                              | true                  | 是否显示                |
| opacity               | number                               | 1                     | 不透明度（0-1之间的值） |
| color                 | string                               | #000000               | 颜色，如：#ff0000       |
| position              | { x: number; y: number; z: number; } | { x: 0; y: 0; z: 0; } | 位置                    |
| rotation              | { x: number; y: number; z: number; } | { x: 0; y: 0; z: 0; } | 旋转                    |
| scale                 | { x: number; y: number; z: number; } | { x: 0; y: 0; z: 0; } | 变形                    |
| rotateX(angle:number) | number                               | 0                     | 沿 X 轴旋转             |
| rotateY(angle:number) | number                               | 0                     | 沿 Y 轴旋转             |
| rotateZ(angle:number) | number                               | 0                     | 沿 Z 轴旋转             |
| asNativeObject()      |                                      |                       | 转换成 Threejs 原生对象 |

