import{_ as t,o as d,c as r,e}from"./app.2baa281c.js";const a={},i=e('<h1 id="_3-数据库设计" tabindex="-1"><a class="header-anchor" href="#_3-数据库设计" aria-hidden="true">#</a> 3. 数据库设计</h1><h3 id="_3-1-试卷表" tabindex="-1"><a class="header-anchor" href="#_3-1-试卷表" aria-hidden="true">#</a> 3.1 试卷表</h3><ul><li>表名：t_exam_paper</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>name</td><td>varchar</td><td>试卷名称</td></tr><tr><td>subject_id</td><td>int</td><td>学科</td></tr><tr><td>paper_type</td><td>int</td><td>试卷类型( 1.固定试卷 4.时段试卷 6.任务试卷 )</td></tr><tr><td>grade_level</td><td>int</td><td>年级</td></tr><tr><td>score</td><td>int</td><td>试卷总分(千分制)</td></tr><tr><td>question_count</td><td>int</td><td>题目数量</td></tr><tr><td>suggest_time</td><td>int</td><td>建议时长(分钟)</td></tr><tr><td>limit_start_time</td><td>datetime</td><td>时段试卷 开始时间</td></tr><tr><td>limit_end_time</td><td>datetime</td><td>时段试卷 结束时间</td></tr><tr><td>frame_text_content_id</td><td>int</td><td>试卷框架 内容为JSON</td></tr><tr><td>create_user</td><td>int</td><td></td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>deleted</td><td>bit</td><td></td></tr><tr><td>task_exam_id</td><td>int</td><td></td></tr></tbody></table><h3 id="_3-2-试卷答案表" tabindex="-1"><a class="header-anchor" href="#_3-2-试卷答案表" aria-hidden="true">#</a> 3.2 试卷答案表</h3><ul><li>表名：t_exam_paper_answer</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>exam_paper_id</td><td>int</td><td></td></tr><tr><td>paper_name</td><td>varchar</td><td>试卷名称</td></tr><tr><td>paper_type</td><td>int</td><td>试卷类型( 1.固定试卷 4.时段试卷 6.任务试卷 )</td></tr><tr><td>subject_id</td><td>int</td><td>学科</td></tr><tr><td>system_score</td><td>int</td><td>系统判定得分</td></tr><tr><td>user_score</td><td>int</td><td>最终得分(千分制)</td></tr><tr><td>paper_score</td><td>int</td><td>试卷总分</td></tr><tr><td>question_correct</td><td>int</td><td>做对题目数量</td></tr><tr><td>question_count</td><td>int</td><td>题目总数量</td></tr><tr><td>do_time</td><td>int</td><td>做题时间(秒)</td></tr><tr><td>status</td><td>int</td><td>试卷状态(1待判分 2完成)</td></tr><tr><td>create_user</td><td>int</td><td>学生</td></tr><tr><td>create_time</td><td>datetime</td><td>提交时间</td></tr><tr><td>task_exam_id</td><td>int</td><td></td></tr></tbody></table><h3 id="_3-3-试卷题目答案表" tabindex="-1"><a class="header-anchor" href="#_3-3-试卷题目答案表" aria-hidden="true">#</a> 3.3 试卷题目答案表</h3><ul><li>表名：t_exam_paper_question_customer_answer</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>question_id</td><td>int</td><td>题目Id</td></tr><tr><td>exam_paper_id</td><td>int</td><td>答案Id</td></tr><tr><td>exam_paper_answer_id</td><td>int</td><td></td></tr><tr><td>question_type</td><td>int</td><td>题型</td></tr><tr><td>subject_id</td><td>int</td><td>学科</td></tr><tr><td>customer_score</td><td>int</td><td>得分</td></tr><tr><td>question_score</td><td>int</td><td>题目原始分数</td></tr><tr><td>question_text_content_id</td><td>int</td><td>问题内容</td></tr><tr><td>answer</td><td>varchar</td><td>做题答案</td></tr><tr><td>text_content_id</td><td>int</td><td>做题内容</td></tr><tr><td>do_right</td><td>bit</td><td>是否正确</td></tr><tr><td>create_user</td><td>int</td><td>做题人</td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>item_order</td><td>int</td><td></td></tr></tbody></table><h3 id="_3-4-消息表" tabindex="-1"><a class="header-anchor" href="#_3-4-消息表" aria-hidden="true">#</a> 3.4 消息表</h3><ul><li>表名：t_message</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>title</td><td>varchar</td><td>标题</td></tr><tr><td>content</td><td>varchar</td><td>内容</td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>send_user_id</td><td>int</td><td>发送者用户ID</td></tr><tr><td>send_user_name</td><td>varchar</td><td>发送者用户名</td></tr><tr><td>send_real_name</td><td>varchar</td><td>发送者真实姓名</td></tr><tr><td>receive_user_count</td><td>int</td><td>接收人数</td></tr><tr><td>read_count</td><td>int</td><td>已读人数</td></tr></tbody></table><h3 id="_3-5-用户消息表" tabindex="-1"><a class="header-anchor" href="#_3-5-用户消息表" aria-hidden="true">#</a> 3.5 用户消息表</h3><ul><li>表名：t_message_user</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>message_id</td><td>int</td><td>消息内容ID</td></tr><tr><td>receive_user_id</td><td>int</td><td>接收人ID</td></tr><tr><td>receive_user_name</td><td>varchar</td><td>接收人用户名</td></tr><tr><td>receive_real_name</td><td>varchar</td><td>接收人真实姓名</td></tr><tr><td>readed</td><td>bit</td><td>是否已读</td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>read_time</td><td>datetime</td><td>阅读时间</td></tr></tbody></table><h3 id="_3-6-题目表" tabindex="-1"><a class="header-anchor" href="#_3-6-题目表" aria-hidden="true">#</a> 3.6 题目表</h3><ul><li>表名：t_question</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>question_type</td><td>int</td><td>1.单选题 2.多选题 3.判断题 4.填空题 5.简答题</td></tr><tr><td>subject_id</td><td>int</td><td>学科</td></tr><tr><td>score</td><td>int</td><td>题目总分(千分制)</td></tr><tr><td>grade_level</td><td>int</td><td>级别</td></tr><tr><td>difficult</td><td>int</td><td>题目难度</td></tr><tr><td>correct</td><td>text</td><td>正确答案</td></tr><tr><td>info_text_content_id</td><td>int</td><td>题目 填空、 题干、解析、答案等信息</td></tr><tr><td>create_user</td><td>int</td><td>创建人</td></tr><tr><td>status</td><td>int</td><td>1.正常</td></tr><tr><td>create_time</td><td>datetime</td><td>创建时间</td></tr><tr><td>deleted</td><td>bit</td><td></td></tr></tbody></table><h3 id="_3-7-学科表" tabindex="-1"><a class="header-anchor" href="#_3-7-学科表" aria-hidden="true">#</a> 3.7 学科表</h3><ul><li>表名：t_subject</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>name</td><td>varchar</td><td>语文 数学 英语 等</td></tr><tr><td>level</td><td>int</td><td>年级 (1-12) 小学 初中 高中 大学</td></tr><tr><td>level_name</td><td>varchar</td><td>一年级、二年级等</td></tr><tr><td>item_order</td><td>int</td><td>排序</td></tr><tr><td>deleted</td><td>bit</td><td></td></tr></tbody></table><h3 id="_3-8-任务表" tabindex="-1"><a class="header-anchor" href="#_3-8-任务表" aria-hidden="true">#</a> 3.8 任务表</h3><ul><li>表名：t_task_exam</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>title</td><td>varchar</td><td></td></tr><tr><td>grade_level</td><td>int</td><td>级别</td></tr><tr><td>frame_text_content_id</td><td>int</td><td>任务框架 内容为JSON</td></tr><tr><td>create_user</td><td>int</td><td></td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>deleted</td><td>bit</td><td></td></tr><tr><td>create_user_name</td><td>varchar</td><td></td></tr></tbody></table><h3 id="_3-9-用户任务表" tabindex="-1"><a class="header-anchor" href="#_3-9-用户任务表" aria-hidden="true">#</a> 3.9 用户任务表</h3><ul><li>表名：t_task_exam_customer_answer</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>task_exam_id</td><td>int</td><td></td></tr><tr><td>create_user</td><td>int</td><td></td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>text_content_id</td><td>int</td><td>任务完成情况(Json)</td></tr></tbody></table><h3 id="_3-10-文本表" tabindex="-1"><a class="header-anchor" href="#_3-10-文本表" aria-hidden="true">#</a> 3.10 文本表</h3><ul><li>表名：t_text_content</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>content</td><td>text</td><td></td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr></tbody></table><h3 id="_3-11-用户表" tabindex="-1"><a class="header-anchor" href="#_3-11-用户表" aria-hidden="true">#</a> 3.11 用户表</h3><ul><li>表名：t_user</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>user_uuid</td><td>varchar</td><td></td></tr><tr><td>user_name</td><td>varchar</td><td>用户名</td></tr><tr><td>password</td><td>varchar</td><td></td></tr><tr><td>real_name</td><td>varchar</td><td>真实姓名</td></tr><tr><td>age</td><td>int</td><td></td></tr><tr><td>sex</td><td>int</td><td>1.男 2女</td></tr><tr><td>birth_day</td><td>datetime</td><td></td></tr><tr><td>user_level</td><td>int</td><td>学生年级(1-12)</td></tr><tr><td>phone</td><td>varchar</td><td></td></tr><tr><td>role</td><td>int</td><td>1.学生 3.管理员</td></tr><tr><td>status</td><td>int</td><td>1.启用 2禁用</td></tr><tr><td>image_path</td><td>varchar</td><td>头像地址</td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>modify_time</td><td>datetime</td><td></td></tr><tr><td>last_active_time</td><td>datetime</td><td></td></tr><tr><td>deleted</td><td>bit</td><td>是否删除</td></tr><tr><td>wx_open_id</td><td>varchar</td><td>微信openId</td></tr></tbody></table><h3 id="_3-12-用户日志表" tabindex="-1"><a class="header-anchor" href="#_3-12-用户日志表" aria-hidden="true">#</a> 3.12 用户日志表</h3><ul><li>表名：t_user_event_log</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>user_id</td><td>int</td><td>用户id</td></tr><tr><td>user_name</td><td>varchar</td><td>用户名</td></tr><tr><td>real_name</td><td>varchar</td><td>真实姓名</td></tr><tr><td>content</td><td>text</td><td>内容</td></tr><tr><td>create_time</td><td>datetime</td><td>时间</td></tr></tbody></table><h3 id="_3-13-用户token表" tabindex="-1"><a class="header-anchor" href="#_3-13-用户token表" aria-hidden="true">#</a> 3.13 用户Token表</h3><ul><li>表名：t_user_token</li><li>字段注释：</li></ul><table><thead><tr><th>字段名</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>token</td><td>varchar</td><td></td></tr><tr><td>user_id</td><td>int</td><td>用户Id</td></tr><tr><td>wx_open_id</td><td>varchar</td><td>微信openId</td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>end_time</td><td>datetime</td><td></td></tr><tr><td>user_name</td><td>varchar</td><td>用户名</td></tr></tbody></table>',40),h=[i];function n(_,l){return d(),r("div",null,h)}const s=t(a,[["render",n],["__file","database.html.vue"]]);export{s as default};
