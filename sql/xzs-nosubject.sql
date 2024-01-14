# Host: 127.0.0.1:53306  (Version: 5.5.53)
# Date: 2024-01-14 21:54:26
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "t_exam_paper"
#

DROP TABLE IF EXISTS `t_exam_paper`;
CREATE TABLE `t_exam_paper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `paper_type` int(11) DEFAULT NULL,
  `grade_level` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `question_count` int(11) DEFAULT NULL,
  `suggest_time` int(11) DEFAULT NULL,
  `limit_start_time` datetime DEFAULT NULL,
  `limit_end_time` datetime DEFAULT NULL,
  `frame_text_content_id` int(11) DEFAULT NULL,
  `create_user` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `task_exam_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_exam_paper"
#


#
# Structure for table "t_exam_paper_answer"
#

DROP TABLE IF EXISTS `t_exam_paper_answer`;
CREATE TABLE `t_exam_paper_answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `exam_paper_id` int(11) DEFAULT NULL,
  `paper_name` varchar(255) DEFAULT NULL,
  `paper_type` int(11) DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `system_score` int(11) DEFAULT NULL,
  `user_score` int(11) DEFAULT NULL,
  `paper_score` int(11) DEFAULT NULL,
  `question_correct` int(11) DEFAULT NULL,
  `question_count` int(11) DEFAULT NULL,
  `do_time` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `create_user` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `task_exam_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_exam_paper_answer"
#


#
# Structure for table "t_exam_paper_question_customer_answer"
#

DROP TABLE IF EXISTS `t_exam_paper_question_customer_answer`;
CREATE TABLE `t_exam_paper_question_customer_answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_id` int(11) DEFAULT NULL,
  `exam_paper_id` int(11) DEFAULT NULL,
  `exam_paper_answer_id` int(11) DEFAULT NULL,
  `question_type` int(11) DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `customer_score` int(11) DEFAULT NULL,
  `question_score` int(11) DEFAULT NULL,
  `question_text_content_id` int(11) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `text_content_id` int(11) DEFAULT NULL,
  `do_right` bit(1) DEFAULT NULL,
  `create_user` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `item_order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_exam_paper_question_customer_answer"
#


#
# Structure for table "t_message"
#

DROP TABLE IF EXISTS `t_message`;
CREATE TABLE `t_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL COMMENT '消息标题',
  `content` varchar(500) DEFAULT NULL COMMENT '消息内容',
  `create_time` datetime DEFAULT NULL COMMENT '消息时间',
  `send_user_id` int(11) DEFAULT NULL COMMENT '发送人id',
  `send_user_name` varchar(255) DEFAULT NULL COMMENT '发送人名字',
  `send_real_name` varchar(255) DEFAULT NULL COMMENT '发送人真实名字',
  `receive_user_count` int(11) DEFAULT NULL COMMENT '接收者数量',
  `read_count` int(11) DEFAULT NULL COMMENT '已阅读数量',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_message"
#


#
# Structure for table "t_message_user"
#

DROP TABLE IF EXISTS `t_message_user`;
CREATE TABLE `t_message_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_id` int(11) DEFAULT NULL COMMENT '消息id',
  `receive_user_id` int(11) DEFAULT NULL COMMENT '接收者id',
  `receive_user_name` varchar(255) DEFAULT NULL COMMENT '接收者名字',
  `receive_real_name` varchar(255) DEFAULT NULL COMMENT '接收者真名',
  `readed` bit(1) DEFAULT NULL COMMENT '是否阅读',
  `create_time` datetime DEFAULT NULL,
  `read_time` datetime DEFAULT NULL COMMENT '阅读时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_message_user"
#


#
# Structure for table "t_question"
#

DROP TABLE IF EXISTS `t_question`;
CREATE TABLE `t_question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_type` int(11) DEFAULT NULL COMMENT '题目类型',
  `score` int(11) DEFAULT NULL COMMENT '分数',
  `grade_level` int(11) DEFAULT NULL COMMENT '属于哪个级别',
  `difficult` int(11) DEFAULT NULL COMMENT '难度',
  `correct` text COMMENT '答案解析',
  `info_text_content_id` int(11) DEFAULT NULL,
  `create_user` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `deleted` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_question"
#


#
# Structure for table "t_task_exam"
#

DROP TABLE IF EXISTS `t_task_exam`;
CREATE TABLE `t_task_exam` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `grade_level` int(11) DEFAULT NULL,
  `frame_text_content_id` int(11) DEFAULT NULL,
  `create_user` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `create_user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_task_exam"
#


#
# Structure for table "t_task_exam_customer_answer"
#

DROP TABLE IF EXISTS `t_task_exam_customer_answer`;
CREATE TABLE `t_task_exam_customer_answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_exam_id` int(11) DEFAULT NULL,
  `create_user` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `text_content_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_task_exam_customer_answer"
#


#
# Structure for table "t_text_content"
#

DROP TABLE IF EXISTS `t_text_content`;
CREATE TABLE `t_text_content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_text_content"
#


#
# Structure for table "t_user"
#

DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_uuid` varchar(36) DEFAULT NULL COMMENT '用户uuid',
  `user_name` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `real_name` varchar(255) DEFAULT NULL COMMENT '真名',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `sex` int(11) DEFAULT NULL COMMENT '性别',
  `birth_day` datetime DEFAULT NULL COMMENT '生日',
  `user_level` int(11) DEFAULT NULL COMMENT '用户级别',
  `phone` varchar(255) DEFAULT NULL COMMENT '电话',
  `role` int(11) DEFAULT NULL COMMENT '角色',
  `status` int(11) DEFAULT NULL COMMENT '是否禁用',
  `image_path` varchar(255) DEFAULT NULL COMMENT '头像url',
  `create_time` datetime DEFAULT NULL,
  `modify_time` datetime DEFAULT NULL,
  `last_active_time` datetime DEFAULT NULL COMMENT '最后登录时间',
  `deleted` bit(1) DEFAULT NULL,
  `wx_open_id` varchar(255) DEFAULT NULL COMMENT '微信id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_user"
#

INSERT INTO `t_user` VALUES (1,'d2d29da2-dcb3-4013-b874-727626236f47','student','D1AGFL+Gx37t0NPG4d6biYP5Z31cNbwhK5w1lUeiHB2zagqbk8efYfSjYoh1Z/j1dkiRjHU+b0EpwzCh8IGsksJjzD65ci5LsnodQVf4Uj6D3pwoscXGqmkjjpzvSJbx42swwNTA+QoDU8YLo7JhtbUK2X0qCjFGpd+8eJ5BGvk=','学生',18,1,'2019-09-01 16:00:00',1,'19171171610',1,1,'https://www.mindskip.net:9008/image/ba607a75-83ba-4530-8e23-660b72dc4953/头像.jpg','2019-09-07 18:55:02','2020-02-04 08:26:54',NULL,b'0',NULL),(2,'52045f5f-a13f-4ccc-93dd-f7ee8270ad4c','admin','D1AGFL+Gx37t0NPG4d6biYP5Z31cNbwhK5w1lUeiHB2zagqbk8efYfSjYoh1Z/j1dkiRjHU+b0EpwzCh8IGsksJjzD65ci5LsnodQVf4Uj6D3pwoscXGqmkjjpzvSJbx42swwNTA+QoDU8YLo7JhtbUK2X0qCjFGpd+8eJ5BGvk=','管理员',30,1,'2019-09-07 18:56:07',NULL,NULL,3,1,NULL,'2019-09-07 18:56:21',NULL,NULL,b'0',NULL);

#
# Structure for table "t_user_event_log"
#

DROP TABLE IF EXISTS `t_user_event_log`;
CREATE TABLE `t_user_event_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `user_name` varchar(255) DEFAULT NULL COMMENT '用户名',
  `real_name` varchar(255) DEFAULT NULL COMMENT '真实名字',
  `content` text COMMENT '日志内容',
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_user_event_log"
#

INSERT INTO `t_user_event_log` VALUES (1,2,'admin','管理员','admin 登录了水木-信奥考试系统','2024-01-14 20:05:03'),(2,1,'student','学生','student 登录了水木-信奥考试系统','2024-01-14 20:37:37'),(3,1,'student','学生','student 提交试卷：任务试卷名称sss 得分：0 耗时：11 秒','2024-01-14 20:37:57'),(4,2,'admin','管理员','admin 登录了水木-信奥考试系统','2024-01-14 20:40:17'),(5,1,'student','学生','student 登录了水木-信奥考试系统','2024-01-14 20:44:40'),(6,2,'admin','管理员','admin 登录了水木-信奥考试系统','2024-01-14 20:47:45'),(7,2,'admin','管理员','admin 登录了水木-信奥考试系统','2024-01-14 21:31:45');

#
# Structure for table "t_user_token"
#

DROP TABLE IF EXISTS `t_user_token`;
CREATE TABLE `t_user_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(36) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `wx_open_id` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

#
# Data for table "t_user_token"
#

