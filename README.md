# React ToDo アプリ

Reactを使用して構築されたシンプルで直感的なToDoアプリケーションです。

## 目次

- [機能](#機能)
- [インストール](#インストール)
- [URL](#URL)

## 機能

- 新しいタスクの追加
- タスクの完了状態のマーク
- タスクの削除
- ステータス別のタスクのフィルタリング（すべて、アクティブ、完了済み）
- レスポンシブデザイン

## インストール

プロジェクトを開始するには、以下の手順に従ってください：

1. リポジトリをクローンします：

```zsh
git clone https://github.com/yourusername/react-todo-app.git
```

2. dockerコンテナのビルド：

```zsh
docker-compose build
```

3. コンテナ上にReactプロジェクトの作成：

```zsh
docker-compose run --rm node sh -c 'npx create-react-app react-app --template typescript'
```

3. react-router-domのインストール：

```zsh
docker-compose run --rm node sh -c 'cd react-practice-todo && npm install react-router-dom'
```

4. dockerコンテナの立ち上げ：

```zsh
docker-compose up
```

## URL

| 環境      | URL                       |
| --------- | ------------------------- |
| ローカル  | [http://localhost:3000](http://localhost:3000) |
