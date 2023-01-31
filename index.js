/**
 * @typedef {Object} 할 일 객체(Todo)
 * @property {number} Id - Todo 고유 ID (필수)
 * @property {string} Content - Todo 내용 (필수)
 * @property {boolean} IsCompleted - 완료 여부 (필수)
 * @property {string} Category - 분류 (필수)
 * @property {string[]} [Tags] - 태그 목록 (선택)
 */

/**
 * Todo 객체를 추가한다.
 *
 * @function
 * @param {Todo} todo - 추가할 Todo 객체
 * @throws {Error} - Todo 컨텐츠가 없을 경우 에러 throw
 * @returns {void}
 */
function createTodo(todo) {}

/**
 * 모든 Todo들을 가져온다.
 *
 * @function
 * @returns {Todo[]} - Todo 배열.
 */
function getTodos() {}

/**
 * 특정 Todo를 가져온다.
 *
 * @function
 * @param {number} id -  가져오려는 Todo Id.
 * @returns {Todo} - 해당 Id 값을 가진 Todo
 */
function getTodoById(id) {}

/**
 * 특정 Todo를 업데이트 한다.
 *
 * @function
 * @param {number} id - 업데이트 하려는 Todo Id값
 * @param {Todo} update - Todo에 업데이트 하려는 내용
 * @returns {void}
 */


function updateTodo(id, update) {}

/**
 * 해당 id를 가진 Todo를 삭제한다.
 *
 * @function
 * @param {number} id - 삭제할 Todo의 id.
 * @returns {void}
 */
function deleteTodo(id) {}

/**
 * 해당 id에 해당하는 tag를 삭제한다.
 *
 * @function
 * @param {number} id - tag를 삭제할 Todo의 id.
 * @param {string} tag - 삭제할 태그값
 * @returns {void}
 */
function deleteTodoTag(id, tag) {}

/**
 * 해당 id의 모든 tag들을 삭제한다.
 *
 * @function
 * @param {number} id - tag를 삭제할 Todo의 id.
 * @returns {void} 
 */
function clearTodoTags(id) {}
