import {downloadJSON, generateTestDate} from "./utils.js";

function Test() {

    return (
        <>
            <button onClick={() => {
                const test_data = generateTestDate();
                const name_list = ['member_list', 'team_list', 'race_list']
                const iterator = name_list[Symbol.iterator]()
                test_data.map(i => downloadJSON(i, iterator.next().value + '.json'))
            }}>下载测试数据</button>
        </>
    )
}

export default Test
