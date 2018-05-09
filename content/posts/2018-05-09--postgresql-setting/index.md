---
title: CakePHP3.xでPostgreSQLの設定
subTitle: ""
category: "PostgreSQL"
cover: postgresql.png
---

# /config/app.phpを修正

```php
'Datasources' => [
    'default' => [
        'className' => 'Cake\Database\Connection',
        'driver' => 'Cake\Database\Driver\Postgres',
        'persistent' => false,
        'host' => 'localhost',
        'username' => '★★',
        'password' => '★★',
        'database' => '★★',
        'encoding' => 'utf8',
        'timezone' => 'UTC',
        'cacheMetadata' => true,
        'log' => false,
```

CakePHP3ではデフォルトで、Mysqlのドライバを参照する設定となっている

そのため、Postgresqlを使用予定で php-mysqlをインストールしていない場合は、以下のようなエラーが発生する

<br>

> Database driver Cake\Database\Driver\Mysql cannot be used due to a missing PHP extension or unmet dependency

上記の`app.php`の中に、'default'と同じように 'test' 側も

`'driver' => 'Cake\Database\Driver\Postgres'` に変える必要がある。

```php
'test' => [
    'className' => 'Cake\Database\Connection',
    'driver' => 'Cake\Database\Driver\Postgres',
  ...
```
