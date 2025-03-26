### 翻译指南：为您的国家创建语言包  

#### **创建语言文件夹**  
1. 按格式创建对应国家/地区的语言文件夹（如：`zh_CN`、`ja_JP`、`es_ES`）  
2. 将 `.po` 文件复制到该文件夹中即可开始编辑  

#### **翻译文件加载优先级**  
- 优先加载 `cheatengine.po` → 其次 `cheatengine-x86_64.po` → 最后 `cheatengine-i386.po`  
- **32位版本可兼容64位的翻译文件**（教程文件同样适用此规则）  

#### **语言切换方式**  
- 默认跟随系统语言  
- 可通过启动参数强制指定语言：  
  ```bash
  CheatEngine.exe --LANG zh_CN   或  -l zh_CN
  ```

---

### **编辑.po文件说明**  
1. **工具选择**：可使用专用.po编辑工具，或直接手动修改  
2. **翻译格式**：  
   ```po
   msgid "Original English Text"  # 原文  
   msgstr "翻译后的文本"          # 若留空则显示原文  
   ```  
3. **特殊文件**：  
   - `lclstrconsts.po` 包含GUI框架的字符串（未在cheatengine.po中的内容）  

---

### **自定义功能**  
#### **1. 重命名翻译包**  
在语言文件夹内创建 `name.txt`，内容可自定义（替代默认语言代码显示名称）  

#### **2. 界面适配脚本**  
- 在语言文件夹内放置 `init.lua`  
- 可通过脚本动态调整控件位置/锚点，解决长文本布局问题  
  ```lua
  -- 示例：向右移动按钮20像素  
  SomeButton.Left = SomeButton.Left + 20
  ```

---

### **操作示例（荷兰语版）**  
1. 创建文件夹：`languages\nl_NL`  
2. 翻译示例：  
   ```po
   # 翻译前
   msgid "Cheat Engine"
   msgstr ""
   
   # 翻译后（注：此为演示，请勿机翻！）
   msgid "Cheat Engine"
   msgstr "Valsspeel motor"
   ```  
3. 测试命令：  
   ```bash
   CheatEngine.exe --LANG nl_NL
   ```

---

（注：保留技术术语如.po/Lua，关键步骤用**加粗**和代码块突出，复杂概念通过示例说明）