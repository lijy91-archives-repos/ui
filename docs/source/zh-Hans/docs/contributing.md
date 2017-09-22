---
title: 贡献
---

## 开发

我们非常欢迎您加入 `@blankapp/ui` 的开发，这份文件将帮助您了解开发流程。

### 开始之前

请遵守以下准则：

- 遵守 [Airbnb JavaScript 代码风格](https://github.com/airbnb/javascript)。
- 使用 2 个空格缩排。

### 工作流程

1. Fork [blankapp/ui](https://github.com/blankapp/ui)
2. 把库（repository）克隆到电脑上，并安装所依赖的插件。

    {% code %}
    $ git clone https://github.com/<username>/ui.git
    $ cd ui
    $ yarn install
    {% endcode %}

3. 新增一个功能分支。

    {% code %}
    $ git flow feature start <your feature>
    {% endcode %}

4. 开始开发。
5. 推送（push）分支。

    {% code %}
    $ git flow feature publish <your feature>
    {% endcode %}

6. 建立一个新的合并申请（pull request）并描述变动。

### 注意事项

- 不要修改 `package.json` 的版本号。
- 只有在测试通过的情况下您的合并申请才会被批准，在提交前别忘了进行测试。

    {% code %}
    $ yarn test && yarn lint
    {% endcode %}

## 更新文档

`@blankapp/ui` 文档开放源代码，您可以在 `/ui/docs` 找到源代码。

### 工作流程

1. 安装 [Hexo](https://hexo.io)。
2. 切换到 `docs` 目录，并安装所依赖的插件。

    {% code %}
    $ cd docs
    $ yarn install
    {% endcode %}

3. 开始编辑文件，您可以通过服务器预览变动。

    {% code %}
    $ hexo server
    {% endcode %}

4. 推送（push）分支。
5. 建立一个新的合并申请（pull request）并描述变动。

### 翻译

1. 在 `source` 资料夹中建立一个新的语言资料夹（全小写）。
2. 把 `source` 资料夹中相关的文件（Markdown 和模板文件）复制到新的语言资料夹中。
3. 在 `source/_data/language.yml` 中新增语言。
4. 将 `en.yml` 复制到 `themes/navy/languages`中并命名为语言名称（全小写）。

## 反馈问题

当您在使用时遇到问题，您可以尝试在 [问题解答](troubleshooting.html) 中寻找解答，或是在 [GitHub](https://github.com/blankapp/ui/issues) 或 [Gitter](https://gitter.im/blankapp/ui) 上提问。如果你没有找答案，请在 Github 报告它。
