---
title: 'MySQL rootパスワードを忘れた時の対応'
subTitle: ""
category: "MySQL"
cover: mysql-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

MySQL rootパスワード忘れた時の対応

# 1.mysqld 停止

```cmd
$ service mysqld stop
```

<br>

# 2.mysqld_safe 実行

認証省略オプション + 安全モードでデモン実行

> /usr/bin/mysqld_safe --skip-grant &
> /usr/bin/mysqld_safe --skip-grant-tables &

```cmd
$ /usr/bin/mysqld_safe --skip-grant-tables &

[1] 32055
Starting mysqld daemon with databases from /var/lib/mysql
```

これでパスワード無しで mysqlに接続できるようになった！

<br>

# 3.新しいパスワードを設定

mysql コンソールに接続する。

```cmd
$ /usr/bin/mysql -u root mysql
```

以下のSQLコマンドを入力し、設定したいパスワードに変更する。

### バージョン5.7 以下

```sql
UPDATE mysql.user SET password=PASSWORD('パスワード') WHERE user='root'; 
FLUSH PRIVILEGES;
quit
```

### バージョン5.7 以上

```sql
UPDATE mysql.user SET authentication_string=PASSWORD('パスワード') WHERE user='root'; 
FLUSH PRIVILEGES;
quit
```

### 実行例

```cmd
$ /usr/bin/mysql -uroot mysql
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 1
Server version: 5.0.77 Source distribution

Type 'help;' or '\h' for help. Type '\c' to clear the buffer.

mysql> update user set password=password('P@ssw0rd') where user='root';
Query OK, 3 rows affected (0.00 sec)
Rows matched: 3  Changed: 3  Warnings: 0

mysql> flush privileges;
Query OK, 0 rows affected (0.00 sec)

mysql> quit
Bye
```

<br>

# 4.mysqld 再起動

```cmd
$ service mysqld restart

STOPPING server from pid file /var/run/mysqld/mysqld.pid
120229 13:08:54  mysqld ended

Stopping MySQL:                                            [  OK  ]
Starting MySQL:                                            [  OK  ]
[1]+  Done                    /usr/bin/mysqld_safe --skip-grant
```

バックグラウンドで実行中だった認証省略安全モードの mysqld プロセスが停止され、通常モードの　mysqldで再起動された！
