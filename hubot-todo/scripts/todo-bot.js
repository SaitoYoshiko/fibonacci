//  Desctription:
//   TODO を管理できるbot
//  Commands:
//     bot名  add      - TODO を作成
//     bot名  done     - TODO を完了済みにする
//     bot名  del      - TODO を消す
//     bot名  list     - TODO の一覧を取得
//     bot名  donelist - TODO 完了済のTODO一覧を取得

'use strict';
const todo = require('todo');
// console.log("現在のTODO");
// console.log(todo.list());
module.exports = robot => {
    robot.respond(/add (.+)/i, msg => {
        const task = msg.match[1].trim();
        todo.add(task);
        msg.send('追加しました： ' + task);
    });
    robot.respond(/done (.+)/i, msg => {
        const task = msg.match[1].trim();
        todo.done(task);
        msg.send('完了にしました： ' + task);
    });
    robot.respond(/del (.+)/i, msg => {
        const task = msg.match[1].trim();
        todo.del(task);
        msg.send('削除しました： ' + task);
    });
    robot.respond(/list/i, msg => {
        msg.send(todo.list().join('\n'));
    });
    robot.respond(/donelist/i, msg => {
        msg.send(todo.donelist().join('\n'));
    });
};

