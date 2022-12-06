import{_ as e,o as i,c as n,e as u}from"./app.0d66055a.js";const l={},d=u(`<h1 id="_4-3-管理端" tabindex="-1"><a class="header-anchor" href="#_4-3-管理端" aria-hidden="true">#</a> 4.3 管理端</h1><h3 id="_4-3-1-登录" tabindex="-1"><a class="header-anchor" href="#_4-3-1-登录" aria-hidden="true">#</a> 4.3.1 登录</h3><ul><li>接口地址：/api/user/login</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;userName&quot;: &quot;admin&quot;,  //用户名
    &quot;password&quot;: &quot;&quot;,  //密码
    &quot;remember&quot;: false  //记住我
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: null,
        &quot;userUuid&quot;: null,
        &quot;userName&quot;: &quot;admin&quot;,  //用户名
        &quot;password&quot;: null,
        &quot;realName&quot;: null,
        &quot;age&quot;: null,
        &quot;sex&quot;: null,
        &quot;birthDay&quot;: null,
        &quot;userLevel&quot;: null,
        &quot;phone&quot;: null,
        &quot;role&quot;: null,
        &quot;status&quot;: null,
        &quot;imagePath&quot;: null,
        &quot;createTime&quot;: null,
        &quot;modifyTime&quot;: null,
        &quot;lastActiveTime&quot;: null,
        &quot;deleted&quot;: null,
        &quot;wxOpenId&quot;: null
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-2-登出" tabindex="-1"><a class="header-anchor" href="#_4-3-2-登出" aria-hidden="true">#</a> 4.3.2 登出</h3><ul><li>接口地址：/api/user/logout</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-3-首页" tabindex="-1"><a class="header-anchor" href="#_4-3-3-首页" aria-hidden="true">#</a> 4.3.3 首页</h3><ul><li>接口地址：/api/admin/dashboard/index</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> {
    &quot;examPaperCount&quot;: 2413,  //试卷总数
    &quot;questionCount&quot;: 1025,  //题目总数
    &quot;doExamPaperCount&quot;: 6148,  //总答卷数
    &quot;doQuestionCount&quot;: 23945,  //总题数
    &quot;mothDayUserActionValue&quot;: [  //活跃度
        85
    ],
    &quot;mothDayDoExamQuestionValue&quot;: [  //月做题数
        22
    ],
    &quot;mothDayText&quot;: [  //本月天数
        &quot;1&quot;
    ]
}    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-4-用户分页" tabindex="-1"><a class="header-anchor" href="#_4-3-4-用户分页" aria-hidden="true">#</a> 4.3.4 用户分页</h3><ul><li>接口地址：/api/admin/user/page/list</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;userName&quot;: &quot;&quot;,  //用户名
    &quot;role&quot;: 1,   //角色
    &quot;pageIndex&quot;: 1,  //页码
    &quot;pageSize&quot;: 10   //每页条数
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 81,  //总数
        &quot;list&quot;: [
            {
                &quot;id&quot;: 100,     //用户id
                &quot;userUuid&quot;: &quot;fd31ab62-c32f-433c-8dc4-c07e653d390a&quot;,  //用户uuid
                &quot;userName&quot;: &quot;王&quot;,  //用户名
                &quot;realName&quot;: null,  //真实姓名
                &quot;age&quot;: null,  //年龄
                &quot;role&quot;: 1,  //角色
                &quot;sex&quot;: null,  //性别
                &quot;birthDay&quot;: &quot;&quot;,  //出生日期          
                &quot;phone&quot;: null,   //手机号                 
                &quot;lastActiveTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //最后活动时间
                &quot;createTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //创建时间
                &quot;modifyTime&quot;: &quot;2021-06-21 20:01:35&quot;,  //修改时间
                &quot;status&quot;: 1,  //状态
                &quot;userLevel&quot;: 1,  //年级
                &quot;imagePath&quot;: null   //头像
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-5-用户查询" tabindex="-1"><a class="header-anchor" href="#_4-3-5-用户查询" aria-hidden="true">#</a> 4.3.5 用户查询</h3><ul><li>接口地址：/api/admin/user/select/1</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 100,     //用户id
        &quot;userUuid&quot;: &quot;fd31ab62-c32f-433c-8dc4-c07e653d390a&quot;,  //用户uuid
        &quot;userName&quot;: &quot;王&quot;,  //用户名
        &quot;realName&quot;: null,  //真实姓名
        &quot;age&quot;: null,  //年龄
        &quot;role&quot;: 1,  //角色
        &quot;sex&quot;: null,  //性别
        &quot;birthDay&quot;: &quot;&quot;,  //出生日期          
        &quot;phone&quot;: null,   //手机号                 
        &quot;lastActiveTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //最后活动时间
        &quot;createTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //创建时间
        &quot;modifyTime&quot;: &quot;2021-06-21 20:01:35&quot;,  //修改时间
        &quot;status&quot;: 1,  //状态
        &quot;userLevel&quot;: 1,  //年级
        &quot;imagePath&quot;: null   //头像
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-6-用户编辑" tabindex="-1"><a class="header-anchor" href="#_4-3-6-用户编辑" aria-hidden="true">#</a> 4.3.6 用户编辑</h3><ul><li>接口地址：/api/admin/user/edit</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: null,
    &quot;userName&quot;: &quot;testzz&quot;,  //用户名
    &quot;password&quot;: &quot;123456&quot;,  //密码
    &quot;realName&quot;: &quot;tesx&quot;,  //真实姓名
    &quot;role&quot;: 1,  //角色
    &quot;status&quot;: 1, //状态
    &quot;age&quot;: &quot;&quot;, //年龄
    &quot;sex&quot;: &quot;&quot;, //性别
    &quot;birthDay&quot;: null, //生日
    &quot;phone&quot;: null,  //手机号
    &quot;userLevel&quot;: 1  //年级
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 109,
        &quot;userUuid&quot;: &quot;321dec89-0656-4736-ae4c-e2b07f4fcc67&quot;,  //用户id
        &quot;userName&quot;: &quot;testzz&quot;, //用户名
        &quot;password&quot;: &quot;&quot; //密码
        &quot;realName&quot;: &quot;tesx&quot;,  //真实姓名
        &quot;age&quot;: null, //年龄
        &quot;sex&quot;: null, //性别
        &quot;birthDay&quot;: null, //生日
        &quot;userLevel&quot;: 1, //年级
        &quot;phone&quot;: null, //手机号
        &quot;role&quot;: 1, //角色
        &quot;status&quot;: 1, //状态
        &quot;imagePath&quot;: null, //头像
        &quot;createTime&quot;: 1624538837259, //创建日期
        &quot;modifyTime&quot;: null, //修改时间
        &quot;lastActiveTime&quot;: 1624538837259, //最后活动时间
        &quot;deleted&quot;: false, //是否删除
        &quot;wxOpenId&quot;: null //微信openId
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-7-用户删除" tabindex="-1"><a class="header-anchor" href="#_4-3-7-用户删除" aria-hidden="true">#</a> 4.3.7 用户删除</h3><ul><li>接口地址：/api/admin/user/delete/3</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,  //返回状态
    &quot;message&quot;: &quot;成功&quot;, //返回消息
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-8-用户状态修改" tabindex="-1"><a class="header-anchor" href="#_4-3-8-用户状态修改" aria-hidden="true">#</a> 4.3.8 用户状态修改</h3><ul><li>接口地址：/api/admin/user/changeStatus/1</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: 2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-9-学科列表" tabindex="-1"><a class="header-anchor" href="#_4-3-9-学科列表" aria-hidden="true">#</a> 4.3.9 学科列表</h3><ul><li>接口地址：/api/admin/education/subject/list</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: [
        {
            &quot;id&quot;: 99,  //学科id
            &quot;name&quot;: &quot;语文&quot;,  //学科名称
            &quot;level&quot;: 1,  //年级
            &quot;levelName&quot;: &quot;一年级&quot;,  //年级名称
            &quot;itemOrder&quot;: null,  //排序
            &quot;deleted&quot;: false  //是否删除
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-10-学科分页" tabindex="-1"><a class="header-anchor" href="#_4-3-10-学科分页" aria-hidden="true">#</a> 4.3.10 学科分页</h3><ul><li>接口地址：/api/admin/education/subject/page</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;level&quot;: null,  //年级
    &quot;pageIndex&quot;: 1,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 2,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 99,
                &quot;name&quot;: &quot;数学&quot;,  //学科名称
                &quot;level&quot;: 1,  //年级
                &quot;levelName&quot;: &quot;一年级&quot;  //年级名称
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-11-学科查询" tabindex="-1"><a class="header-anchor" href="#_4-3-11-学科查询" aria-hidden="true">#</a> 4.3.11 学科查询</h3><ul><li>接口地址：/api/admin/education/subject/select/2</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 99,
        &quot;name&quot;: &quot;数学&quot;,  //学科名称
        &quot;level&quot;: 1,    //年级
        &quot;levelName&quot;: &quot;一年级&quot;   //年级名称
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-12-学科编辑" tabindex="-1"><a class="header-anchor" href="#_4-3-12-学科编辑" aria-hidden="true">#</a> 4.3.12 学科编辑</h3><ul><li>接口地址：/api/admin/education/subject/edit</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: 99,
    &quot;name&quot;: &quot;数学&quot;,  //学科名称
    &quot;level&quot;: 2,   //年级
    &quot;levelName&quot;: &quot;二年级&quot;  //年级名称
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-13-学科删除" tabindex="-1"><a class="header-anchor" href="#_4-3-13-学科删除" aria-hidden="true">#</a> 4.3.13 学科删除</h3><ul><li>接口地址：/api/admin/education/subject/delete/3</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-14-试卷分页" tabindex="-1"><a class="header-anchor" href="#_4-3-14-试卷分页" aria-hidden="true">#</a> 4.3.14 试卷分页</h3><ul><li>接口地址：/api/admin/exam/paper/page</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: null,
    &quot;level&quot;: null,   //年级
    &quot;subjectId&quot;: null,  //学科
    &quot;pageIndex&quot;: 1,  //页码
    &quot;pageSize&quot;: 10  //每页数量
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 9,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 99,     //试卷id
                &quot;name&quot;: &quot;中级任务二&quot;,    //试卷名称
                &quot;questionCount&quot;: 5,  //题目总数
                &quot;score&quot;: 180, //试卷分数
                &quot;createTime&quot;: &quot;2021-01-21 11:49:31&quot;,  //创建时间
                &quot;createUser&quot;: 2,  //创建人
                &quot;subjectId&quot;: 1,  //学科
                &quot;paperType&quot;: 6, //试卷类型
                &quot;frameTextContentId&quot;: 13  //试卷内容
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-15-试卷查询" tabindex="-1"><a class="header-anchor" href="#_4-3-15-试卷查询" aria-hidden="true">#</a> 4.3.15 试卷查询</h3><ul><li>接口地址：/api/admin/exam/paper/select/9</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 99,   //试卷id
        &quot;level&quot;: 1,  //年级
        &quot;subjectId&quot;: 1,  //学科
        &quot;paperType&quot;: 1,  //试卷类型
        &quot;name&quot;: &quot;语文试卷&quot;, //试卷名称  
        &quot;suggestTime&quot;: 20,  //考试时间
        &quot;limitDateTime&quot;: null,  //限时考试
        &quot;titleItems&quot;: [
            {
                &quot;name&quot;: &quot;一、选择题&quot;,  //试卷标题
                &quot;questionItems&quot;: [
                    {
                        &quot;id&quot;: 99,   //题目id
                        &quot;questionType&quot;: 5,  //题目类型
                        &quot;subjectId&quot;: 1,  //学科
                        &quot;title&quot;: &quot;默写咏鹅&quot;, //题干
                        &quot;gradeLevel&quot;: 1, //年级
                        &quot;items&quot;: [], //题目选项
                        &quot;analyze&quot;: &quot;咏鹅可以带拼音&quot;,  //解析
                        &quot;correctArray&quot;: null,  //标答数组
                        &quot;correct&quot;: &quot;鹅鹅鹅， 曲项向天歌。 白毛浮绿水， 红掌拨清波。&quot;,  //标答
                        &quot;score&quot;: &quot;10&quot;,  //题目分数
                        &quot;difficult&quot;: 3,  //难度
                        &quot;itemOrder&quot;: 1  //题序
                    }
                ]
            }
        ],
        &quot;score&quot;: &quot;10&quot;  //试卷总分
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-16-试卷编辑" tabindex="-1"><a class="header-anchor" href="#_4-3-16-试卷编辑" aria-hidden="true">#</a> 4.3.16 试卷编辑</h3><ul><li>接口地址：/api/admin/exam/paper/edit</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: 99,  //试卷id
    &quot;level&quot;: 1,  //年级
    &quot;subjectId&quot;: 1,  //学科
    &quot;paperType&quot;: 6,  //试卷类型
    &quot;name&quot;: &quot;中级任务二&quot;,  //试卷名称
    &quot;suggestTime&quot;: 20,  //考试时长
    &quot;limitDateTime&quot;: null,  //限时
    &quot;titleItems&quot;: [
        {
            &quot;name&quot;: &quot;一、选择题&quot;,  //标题
            &quot;questionItems&quot;: [   //题目列表
                {
                    &quot;id&quot;: 99,   //题目id
                    &quot;questionType&quot;: 2,  //题型
                    &quot;subjectId&quot;: 1,  //学科
                    &quot;title&quot;: &quot;以下哪些诗句是静夜思的？&quot;,  //题干
                    &quot;gradeLevel&quot;: 1,  //年级
                    &quot;items&quot;: [   //选项
                        {
                            &quot;prefix&quot;: &quot;A&quot;,   //选项标记
                            &quot;content&quot;: &quot;床前明月光&quot;,  //选项内容
                            &quot;score&quot;: null,  //选项分数
                            &quot;itemUuid&quot;: null  //选项标识
                        }
                    ],
                    &quot;analyze&quot;: &quot;床前明月光， 疑是地上霜。 举头望明月， 低头思故乡。&quot;,  //解析
                    &quot;correctArray&quot;: [  //正确答案
                        &quot;A&quot;,
                        &quot;C&quot;
                    ],
                    &quot;correct&quot;: &quot;A,C&quot;, //正确答案
                    &quot;score&quot;: &quot;0&quot;,  //题目分数
                    &quot;difficult&quot;: 3,  //难度
                    &quot;itemOrder&quot;: 1  //题序
                }
            ]
        }
    ],
    &quot;score&quot;: &quot;18&quot;  //试卷总分
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 99,  //试卷id
        &quot;level&quot;: 1,  //年级
        &quot;subjectId&quot;: 1,   //学科
        &quot;paperType&quot;: 6,   //试卷类型
        &quot;name&quot;: &quot;中级任务二&quot;,   //试卷名称
        &quot;suggestTime&quot;: 20,  //考试时长
        &quot;limitDateTime&quot;: null,  //限时
        &quot;titleItems&quot;: [
            {
                &quot;name&quot;: &quot;一、选择题&quot;,  //标题
                &quot;questionItems&quot;: [
                    {
                        &quot;id&quot;: 99,   //题目id
                        &quot;questionType&quot;: 2,    //题型
                        &quot;subjectId&quot;: 1,   //学科
                        &quot;title&quot;: &quot;以下哪些诗句是静夜思的？&quot;,   //题干
                        &quot;gradeLevel&quot;: 1,    //年级
                        &quot;items&quot;: [   //选项
                            {
                                &quot;prefix&quot;: &quot;A&quot;,   //选项标记
                                &quot;content&quot;: &quot;床前明月光&quot;,     //选项内容
                                &quot;score&quot;: null,   //选项分数
                                &quot;itemUuid&quot;: null  //选项标识
                            }
                        ],
                        &quot;analyze&quot;: &quot;床前明月光， 疑是地上霜。 举头望明月， 低头思故乡。&quot;,   //解析
                        &quot;correctArray&quot;: [   //正确答案
                            &quot;A&quot;,
                            &quot;C&quot;
                        ],
                        &quot;correct&quot;: &quot;A,C&quot;,   //正确答案
                        &quot;score&quot;: &quot;0&quot;,   //题目分数
                        &quot;difficult&quot;: 3,   //难度
                        &quot;itemOrder&quot;: 1   //题序
                    }
                ]
            }
        ],
        &quot;score&quot;: &quot;18&quot;  //题序
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-17-试卷删除" tabindex="-1"><a class="header-anchor" href="#_4-3-17-试卷删除" aria-hidden="true">#</a> 4.3.17 试卷删除</h3><ul><li>接口地址：/api/admin/exam/paper/delete/9</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-18-任务试卷分页" tabindex="-1"><a class="header-anchor" href="#_4-3-18-任务试卷分页" aria-hidden="true">#</a> 4.3.18 任务试卷分页</h3><ul><li>接口地址：/api/admin/exam/paper/taskExamPage</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;subjectId&quot;: null,  //学科
    &quot;level&quot;: 1,  //年级
    &quot;paperType&quot;: 6,  //试卷类型
    &quot;pageIndex&quot;: 1,  //页面
    &quot;pageSize&quot;: 5  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 1,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 99,
                &quot;name&quot;: &quot;任务试卷五&quot;,   //试卷名称
                &quot;questionCount&quot;: 2,   //题目总数
                &quot;score&quot;: 60,   //试卷分数
                &quot;createTime&quot;: &quot;2021-08-02 14:36:26&quot;,  //创建时间
                &quot;createUser&quot;: 2,  //创建人
                &quot;subjectId&quot;: 1,  //学科
                &quot;paperType&quot;: 6,  //试卷类型
                &quot;frameTextContentId&quot;: 26  //试卷内容
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-19-题目分页" tabindex="-1"><a class="header-anchor" href="#_4-3-19-题目分页" aria-hidden="true">#</a> 4.3.19 题目分页</h3><ul><li>接口地址：/api/admin/question/page</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: null,
    &quot;questionType&quot;: null,
    &quot;level&quot;: null,
    &quot;subjectId&quot;: null,
    &quot;pageIndex&quot;: 1,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 7,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 99,
                &quot;questionType&quot;: 5,  //题型
                &quot;textContentId&quot;: null,
                &quot;createTime&quot;: &quot;2021-01-21 11:45:57&quot;,  //创建时间
                &quot;subjectId&quot;: 1,  //学科
                &quot;createUser&quot;: 2,  //创建人
                &quot;score&quot;: &quot;10&quot;, //得分
                &quot;status&quot;: 1,  //状态
                &quot;correct&quot;: &quot;鹅鹅鹅， 曲项向天歌。 白毛浮绿水， 红掌拨清波。&quot;,  //标答
                &quot;analyzeTextContentId&quot;: null,   //解析
                &quot;difficult&quot;: 3,  //难度
                &quot;shortTitle&quot;: &quot;默写咏鹅&quot;  //题干
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-20-题目查询" tabindex="-1"><a class="header-anchor" href="#_4-3-20-题目查询" aria-hidden="true">#</a> 4.3.20 题目查询</h3><ul><li>接口地址：/api/admin/question/select/508</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 508,  //题目id
        &quot;questionType&quot;: 5,  //题型
        &quot;subjectId&quot;: 4,  //学科
        &quot;title&quot;: &quot;&lt;p&gt;什么是快乐星球？&lt;/p&gt;&quot;,   //题干
        &quot;gradeLevel&quot;: 1,  //年级
        &quot;items&quot;: [],  //选项
        &quot;analyze&quot;: &quot;照抄即可&quot;,  //解析
        &quot;correctArray&quot;: null,  //标答
        &quot;correct&quot;: &quot;什么是快乐星球&quot;,  //正确答案
        &quot;score&quot;: &quot;5&quot;,  //题目分数
        &quot;difficult&quot;: 5,  //难度
        &quot;itemOrder&quot;: null
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-21-题目编辑" tabindex="-1"><a class="header-anchor" href="#_4-3-21-题目编辑" aria-hidden="true">#</a> 4.3.21 题目编辑</h3><ul><li>接口地址：/api/admin/question/edit</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: 99, //题目id
    &quot;questionType&quot;: 5, //题型
    &quot;subjectId&quot;: 1,  //学科
    &quot;title&quot;: &quot;默写咏鹅&quot;,   //题干
    &quot;gradeLevel&quot;: 1,  //年级
    &quot;items&quot;: [],  //选项
    &quot;analyze&quot;: &quot;咏鹅可以带拼音&quot;,   //解析
    &quot;correctArray&quot;: null, //标答
    &quot;correct&quot;: &quot;鹅鹅鹅， 曲项向天歌。 白毛浮绿水， 红掌拨清波。&quot;, //正确答案
    &quot;score&quot;: 10,  //题目分数
    &quot;difficult&quot;: 3, //难度
    &quot;itemOrder&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-22-题目删除" tabindex="-1"><a class="header-anchor" href="#_4-3-22-题目删除" aria-hidden="true">#</a> 4.3.22 题目删除</h3><ul><li>接口地址：/api/admin/question/delete/7</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-23-任务分页" tabindex="-1"><a class="header-anchor" href="#_4-3-23-任务分页" aria-hidden="true">#</a> 4.3.23 任务分页</h3><ul><li>接口地址：/api/admin/task/page</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;gradeLevel&quot;: null,
    &quot;pageIndex&quot;: 1,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 2,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 99,   //任务id
                &quot;title&quot;: &quot;中级任务&quot;,   //任务标题
                &quot;gradeLevel&quot;: 1,  //年级
                &quot;createUserName&quot;: &quot;admin&quot;,  //创建人用户名
                &quot;createTime&quot;: &quot;2021-01-21 11:50:24&quot;,  //创建时间
                &quot;deleted&quot;: false  //是否删除
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-24-任务查询" tabindex="-1"><a class="header-anchor" href="#_4-3-24-任务查询" aria-hidden="true">#</a> 4.3.24 任务查询</h3><ul><li>接口地址：/api/admin/task/select/22</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 99,  //任务id
        &quot;gradeLevel&quot;: 12,  //年级
        &quot;title&quot;: &quot;考试&quot;,  //任务标题
        &quot;paperItems&quot;: [
            {
                &quot;id&quot;: 592,  //试卷id
                &quot;name&quot;: &quot;考试&quot;,  //试卷名称
                &quot;questionCount&quot;: 5,  //题目数量
                &quot;score&quot;: 275,  //试卷分数
                &quot;createTime&quot;: &quot;2021-08-12 15:02:50&quot;,  //创建时间
                &quot;createUser&quot;: 2,  //创建人
                &quot;subjectId&quot;: 46,  //学科
                &quot;paperType&quot;: 6,  //试卷类型
                &quot;frameTextContentId&quot;: 2897,  //试卷内容
                &quot;allClasses&quot;: null
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-25-任务编辑" tabindex="-1"><a class="header-anchor" href="#_4-3-25-任务编辑" aria-hidden="true">#</a> 4.3.25 任务编辑</h3><ul><li>接口地址：/api/admin/task/edit</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: 99,
    &quot;gradeLevel&quot;: 1,
    &quot;title&quot;: &quot;中级任务&quot;,
    &quot;paperItems&quot;: [
        {
            &quot;id&quot;: 99,  //试卷id
            &quot;name&quot;: &quot;中级任务一&quot;,  //试卷名称
            &quot;questionCount&quot;: 5,  //题目数量
            &quot;score&quot;: 180,  //试卷分数
            &quot;createTime&quot;: &quot;2021-01-21 11:49:11&quot;,  //创建时间
            &quot;createUser&quot;: 2,  //创建人
            &quot;subjectId&quot;: 1,  //学科
            &quot;paperType&quot;: 6,  //试卷类型
            &quot;frameTextContentId&quot;: 12  //试卷内容
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 99,  //任务id
        &quot;gradeLevel&quot;: 1,   //年级
        &quot;title&quot;: &quot;中级任务&quot;,  //任务标题
        &quot;paperItems&quot;: [
            {
                &quot;id&quot;: 99,  //试卷id
                &quot;name&quot;: &quot;中级任务一&quot;,  //试卷名称
                &quot;questionCount&quot;: 5,  //题目数量
                &quot;score&quot;: 180,  //试卷分数
                &quot;createTime&quot;: &quot;2021-01-21 11:49:11&quot;,  //创建时间
                &quot;createUser&quot;: 2,  //创建人
                &quot;subjectId&quot;: 1,  //学科
                &quot;paperType&quot;: 6,  //试卷类型
                &quot;frameTextContentId&quot;: 12  //试卷内容
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-26-任务删除" tabindex="-1"><a class="header-anchor" href="#_4-3-26-任务删除" aria-hidden="true">#</a> 4.3.26 任务删除</h3><ul><li>接口地址：/api/admin/task/delete/1</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,  //返回状态
    &quot;message&quot;: &quot;成功&quot;, //返回消息
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-27-消息分页" tabindex="-1"><a class="header-anchor" href="#_4-3-27-消息分页" aria-hidden="true">#</a> 4.3.27 消息分页</h3><ul><li>接口地址：/api/admin/message/page</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;sendUserName&quot;: null,
    &quot;pageIndex&quot;: 4,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 36,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 99,   //消息id
                &quot;title&quot;: &quot;你好，同学！&quot;,  //消息标题
                &quot;content&quot;: &quot;考试请不要作弊&quot;,  //消息内容
                &quot;sendUserName&quot;: &quot;admin&quot;,  //发送人用户名
                &quot;receives&quot;: &quot;student&quot;,  //接收人用户名
                &quot;receiveUserCount&quot;: 1,  //接收人数量
                &quot;readCount&quot;: 1,  //已读数量
                &quot;createTime&quot;: &quot;2020-09-22 11:37:49&quot; //创建时间
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-28-消息发送" tabindex="-1"><a class="header-anchor" href="#_4-3-28-消息发送" aria-hidden="true">#</a> 4.3.28 消息发送</h3><ul><li>接口地址：/api/admin/message/send</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;title&quot;: &quot;全校师生请注意&quot;,  //消息标题
    &quot;content&quot;: &quot;大家好&quot;,  //消息内容
    &quot;receiveUserIds&quot;: [  //接收人
        1
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,  //返回状态
    &quot;message&quot;: &quot;成功&quot;, //返回消息
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-29-答卷分页" tabindex="-1"><a class="header-anchor" href="#_4-3-29-答卷分页" aria-hidden="true">#</a> 4.3.29 答卷分页</h3><ul><li>接口地址：/api/admin/examPaperAnswer/page</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;subjectId&quot;: null,  //学科
    &quot;pageIndex&quot;: 1,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 4,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 99,
                &quot;createTime&quot;: &quot;2021-07-07 14:03:02&quot;,  //提交时间
                &quot;userScore&quot;: &quot;16&quot;,  //用户得分
                &quot;subjectName&quot;: &quot;语文&quot;,  //学科名称
                &quot;subjectId&quot;: 1,  //学科Id  
                &quot;questionCount&quot;: 5,  //题目数量
                &quot;questionCorrect&quot;: 4,  //正确题目数
                &quot;paperScore&quot;: &quot;18&quot;, //试卷总分
                &quot;doTime&quot;: &quot;14 秒&quot;,  //耗时
                &quot;paperType&quot;: 4,  //试卷类型
                &quot;systemScore&quot;: &quot;2&quot;,  //自动批改得分
                &quot;status&quot;: 2,  //答卷状态
                &quot;paperName&quot;: &quot;限时考试二&quot;,  //试卷名称
                &quot;userName&quot;: &quot;student&quot; //用户名
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-30-用户日志" tabindex="-1"><a class="header-anchor" href="#_4-3-30-用户日志" aria-hidden="true">#</a> 4.3.30 用户日志</h3><ul><li>接口地址：/api/admin/user/event/page/list</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;userId&quot;: null,
    &quot;userName&quot;: null,
    &quot;pageIndex&quot;: 1,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 68,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 99,  //日志id
                &quot;userId&quot;: 2,  //用户id
                &quot;userName&quot;: &quot;admin&quot;,  //用户名
                &quot;realName&quot;: &quot;管理员&quot;, //真实姓名
                &quot;content&quot;: &quot;admin 登录了学之思开源考试系统&quot;, //日志内容
                &quot;createTime&quot;: &quot;2021-08-24 20:05:02&quot; //创建时间
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-31-当前用户信息" tabindex="-1"><a class="header-anchor" href="#_4-3-31-当前用户信息" aria-hidden="true">#</a> 4.3.31 当前用户信息</h3><ul><li>接口地址：/api/admin/user/current</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 99,
        &quot;userUuid&quot;: &quot;52045f5f-a13f-4ccc-93dd-f7ee8270ad4c&quot;, //用户uuid
        &quot;userName&quot;: &quot;admin&quot;,  //用户名
        &quot;realName&quot;: &quot;管理员&quot;, //真实姓名
        &quot;age&quot;: 30, //年龄
        &quot;role&quot;: 3, //角色
        &quot;sex&quot;: 1, //性别
        &quot;birthDay&quot;: &quot;2019-09-07 18:56:07&quot;, //出生日期
        &quot;phone&quot;: null, //手机号
        &quot;lastActiveTime&quot;: &quot;&quot;,  //最后活动时间
        &quot;createTime&quot;: &quot;2019-09-07 18:56:21&quot;,  //创建时间
        &quot;modifyTime&quot;: &quot;&quot;, //修改时间
        &quot;status&quot;: 1, //状态
        &quot;userLevel&quot;: null, //用户年级
        &quot;imagePath&quot;: null  //头像
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-32-用户信息更新" tabindex="-1"><a class="header-anchor" href="#_4-3-32-用户信息更新" aria-hidden="true">#</a> 4.3.32 用户信息更新</h3><ul><li>接口地址：/api/admin/user/update</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: 99,  //用户id
    &quot;userUuid&quot;: &quot;52045f5f-a13f-4ccc-93dd-f7ee8270ad4c&quot;, //用户标识
    &quot;userName&quot;: &quot;admin&quot;, //用户名
    &quot;realName&quot;: &quot;管理员&quot;, //真实姓名
    &quot;age&quot;: 30, //年龄
    &quot;role&quot;: 3, //角色
    &quot;sex&quot;: 1,  //性别
    &quot;birthDay&quot;: &quot;2019-09-07 18:56:07&quot;, //生日
    &quot;phone&quot;: &quot;11&quot;, //手机号
    &quot;lastActiveTime&quot;: &quot;&quot;, //最后活动时间
    &quot;createTime&quot;: &quot;2019-09-07 18:56:21&quot;, //创建时间
    &quot;modifyTime&quot;: &quot;2021-08-17 11:28:52&quot;, //修改时间
    &quot;status&quot;: 1, //状态
    &quot;userLevel&quot;: null, //年级
    &quot;imagePath&quot;: null //头像
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-32-用户信息更新-1" tabindex="-1"><a class="header-anchor" href="#_4-3-32-用户信息更新-1" aria-hidden="true">#</a> 4.3.32 用户信息更新</h3><ul><li>接口地址：/api/admin/user/selectByUserName</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>student  //用户名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: [
        {
            &quot;name&quot;: &quot;student&quot;,  //用户名
            &quot;value&quot;: 1  //用户id
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-33-图片上传" tabindex="-1"><a class="header-anchor" href="#_4-3-33-图片上传" aria-hidden="true">#</a> 4.3.33 图片上传</h3><ul><li>接口地址：/api/admin/upload/configAndUpload</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;original&quot;: &quot;头像.jpg&quot;,
    &quot;name&quot;: &quot;头像.jpg&quot;,
    &quot;url&quot;: &quot;http://xzs.file.mindskip.net/Fi4vlEf1ri4VMGSONwN2Ch0o8Ed_&quot;,
    &quot;size&quot;: 19665,
    &quot;type&quot;: &quot;.jpg&quot;,
    &quot;state&quot;: &quot;SUCCESS&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-34-个人信息修改" tabindex="-1"><a class="header-anchor" href="#_4-3-34-个人信息修改" aria-hidden="true">#</a> 4.3.34 个人信息修改</h3><ul><li>接口地址：/api/admin/user/update</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: 99,
    &quot;userUuid&quot;: &quot;52045f5f-a13f-4ccc-93dd-f7ee8270ad4c&quot;,  //用户uuid
    &quot;userName&quot;: &quot;admin&quot;, //用户名
    &quot;realName&quot;: &quot;管理员&quot;, //真实姓名
    &quot;age&quot;: 30, //年龄
    &quot;role&quot;: 3, //角色
    &quot;sex&quot;: 1, //性别
    &quot;birthDay&quot;: &quot;2021-09-07 18:56:07&quot;,  //出生日期
    &quot;phone&quot;: &quot;2112112&quot;, //手机号
    &quot;lastActiveTime&quot;: &quot;&quot;, //最后活动时间
    &quot;createTime&quot;: &quot;2019-09-07 18:56:21&quot;,  //创建时间
    &quot;modifyTime&quot;: &quot;2021-08-31 10:08:03&quot;, //修改时间
    &quot;status&quot;: 1, //状态
    &quot;userLevel&quot;: null,  //年级
    &quot;imagePath&quot;: null //头像
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,144),s=[d];function t(a,o){return i(),n("div",null,s)}const r=e(l,[["render",t],["__file","admin.html.vue"]]);export{r as default};
