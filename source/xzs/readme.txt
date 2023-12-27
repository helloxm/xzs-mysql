mvn clean package

java -D"user.timezone=Asia/Shanghai" -jar -D"spring.profiles.active=dev"  .\target\xzs-3.9.0.jar

sprint boot 学习 https://blog.csdn.net/friggly/article/details/123888590


学生访问
http://127.0.0.1:8000/student

管理员
http://127.0.0.1:8000/admin

老师 -- 未实现
http://127.0.0.1:8000/teache