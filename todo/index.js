'use strict'
// {name: タスクの文字列、、state: 完了かどうかのフラグ}
const tasks = [];

/**
 * 新規のタスクをTODOリストに追加
 * @param {String} task 
 */
function add(task) {
    tasks.push({ name: task, state: false });
}

/**
 * taskと完了済みかどうかをオブジェクトで渡すと、ステータスを返す
 * @param {object} taskAndIsDonePair 
 * @returns {boolean} 完了・未完了のステータス
 */
function isDone(taskAndIsDonePair) {
    return taskAndIsDonePair.state;
}

/**
 * タスクとステータスを渡すと、完了していないかどうかを返す
 * @param {object} taskAndIsDonePair 
 * @returns {boolean} 完了・未完了ステータス
 */
function isNotDone(taskAndIsDonePair) {
    return !isDone(taskAndIsDonePair);
}

/**
 * TODOリストから未完了リストの一覧を取得
 * @returns {array}
 */
function list() {
    return tasks
        // .filter(task => !task.state) 一回目のリファクタリング
        // .filter(task => !isDone(task))　2回目のリファクタリング
        .filter(isNotDone)
        .map(t => t.name);
}

/**
 * TODOを完了済み(true)にする
 * @param {String} task 
 */
function done(task) {
    const indexFound = tasks.findIndex(t => t.name === task);
    if (indexFound !== -1) {
        tasks[indexFound].state = true;
    }
}

/**
 * 完了済みisDone=trueのタスク一覧を配列で受け取る
 * @returns {array}
 */
function donelist() {
    return tasks
        // .filter(task => task.state) フィルタリング
        .filter(isDone)
        .map(t => t.name);
}

/**
 * 項目の削除
 * @param {String} task 
 */
function del(task) {
    const indexFound = tasks.findIndex(t => t.name === task);
    if (indexFound !== -1) {
        tasks.splice(indexFound, 1);
    }
}

module.exports = {
    add, list, done, donelist, del
};

