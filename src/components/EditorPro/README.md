## EditorPro

富文本编辑器，v-model绑定内容，基于wangEditor5

### 属性

- modelValue 字符串，编辑器内容，推荐使用v-model绑定

- toolbarConfig 对象，工具栏配置，参考[wangEditor5 工具栏配置](https://www.wangeditor.com/v5/toolbar-config.html)

- editorConfig 对象，编辑器配置，参考[wangEditor5 编辑器配置](https://www.wangeditor.com/v5/editor-config.html)

- mode 字符串，`'default'` 默认模式 - 集成了 wangEditor 所有功能；`'simple'` 简洁模式 - 仅有部分常见功能，但更加简洁易用，默认：`'default'`

- height 正数/字符串，编辑区域高度，默认：`300`

- placeholder 字符串，占位符，默认：`请输入`

- disabled 布尔对象，禁用编辑功能，默认：`false`

### 注意

- 自定义上传图片到服务器的逻辑

  ```javascript
  editorConfig.MENU_CONF['uploadImage'] = {
  	async customUpload(file, insertFn) {
  		// file 是 input 中选中的文件列表
  		// insertFn 是获取图片 url 后，插入到编辑器的方法

  		// 自己实现上传，并得到图片 url alt href
  		// 将图片插入到编辑器中
  		insertFn(url, alt, href)
  	}
  }
  ```

- 自定义上传视频到服务器的逻辑

  ```javascript
  editorConfig.MENU_CONF['uploadVideo'] = {
  	async customUpload(file, insertFn) {
  		// file 即选中的文件
  		// insertFn 是获取视频 url 后，插入到编辑器的方法
  		// 自己实现上传，并得到视频 url poster(封面地址,可选)

  		// 最后插入视频
  		insertFn(url, poster)
  	}
  }
  ```

- 你也可以选择用编辑器自带上传逻辑，但你需要传递对应的上传接口地址`url`(imgUploadUrl,videoUploadUrl)，接口返回数据格式为：

  ```json
  {
  	"data": {
  		"id": "xxx"
  	}
  }
  ```

  文件下载地址应为：`url + '/' + id + '/download'`

- 定制样式（编辑区域、预览层,解决z-index导致的穿透等）：编辑器容器class为：`editor-pro-root` ，工具栏class为：`editor-pro-toolbar`，编辑区class为`editor-pro-editor`，预览层id为`editor-preview`,直接另外写新样式覆写原有样式即可。

- 编辑器工具栏菜单key:
  ```json
  [
  	"headerSelect",
  	"blockquote",
  	"|",
  	"bold",
  	"underline",
  	"italic",
  	{
  		"key": "group-more-style",
  		"menuKeys": ["through", "code", "sup", "sub", "clearStyle"]
  	},
  	"color",
  	"bgColor",
  	"|",
  	"fontSize",
  	"fontFamily",
  	"lineHeight",
  	"|",
  	"bulletedList",
  	"numberedList",
  	"todo",
  	{
  		"key": "group-justify",
  		"menuKeys": ["justifyLeft", "justifyRight", "justifyCenter", "justifyJustify"]
  	},
  	{
  		"key": "group-indent",
  		"menuKeys": ["indent", "delIndent"]
  	},
  	"|",
  	"emotion",
  	"insertLink",
  	{
  		"key": "group-image",
  		"menuKeys": ["insertImage", "uploadImage"]
  	},
  	{
  		"key": "group-video",
  		"menuKeys": ["insertVideo", "uploadVideo"]
  	},
  	"insertTable",
  	"codeBlock",
  	"divider",
  	"|",
  	"undo",
  	"redo",
  	"|",
  	"previewX",
  	"fullScreen"
  ]
  ```
