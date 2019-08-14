
const bag = 10;
const goodList = [{
    name: 'apple',
    w: 1,
    v: 1
}, {
    name: 'book',
    w: 1,
    v: 1
}];

const goodLen = goodList.length;

const wList = goodList.map(item => {
    return item.w
});

const vList = goodList.map(item => {
    return item.v
});

const nList = goodList.map(item => {
    return item.name
});

const map = {};
const path = {};

function setMap(i, w, v) {
    map[i] = map[i] || {};
    map[i][w] = v
}

function setPath(i, w) {
    path[i] = path[i] || {};
    // 在重量为w的包里，是否放置第i个物品以达到最大价值
    path[i][w] = true
}

function getMax(i, w) {
    if (i === 0) {
        if (wList[i] > w) {
            setMap(i, w, 0);
            return 0
        } else {
            setMap(i, w, vList[i]);
            setPath(i, w);
            return vList[i]
        }
    }

    if (wList[i] > w) {
        let plan = getMax(i-1,w);
        setMap(i, w, plan);
        return plan
    } else {
        let planA = getMax(i-1, w);
        let planB = getMax(i-1, w-wList[i]) + vList[i];
        if (planB > planA) {
            setMap(i, w, planB);
            setPath(i, w);
            return planB
        } else {
            setMap(i, w, planA);
            return planA
        }
    }
}

const val = getMax(goodLen - 1, bag);
let bagCost = 0;

function getSelect(i, j) {
    if (i < 0) {
        return []
    }
    let arr = [];
    if (path[i] && path[i][j]) {
        arr.push(i);
        bagCost += wList[i];
        console.log(`物品${nList[i]} x 1`);
        return arr.concat(getSelect(i-1, j-wList[i]))
    } else {
        console.log(`物品${nList[i]} x 0`);
        return arr.concat(getSelect(i-1, j))
    }
}

getSelect(goodLen - 1, bag);
console.log(`物品总价值${val}`);
console.log(`背包负重${bagCost}/${bag}`);