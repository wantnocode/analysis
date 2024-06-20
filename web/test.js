// 生成实体的函数
function generateEntity(index) {
  const types = [
    'person', 'account',
  ];
  const randomIndex = Math.floor(Math.random() * types.length);
  const type = types[randomIndex];
  return {
    key: index + "",
    text: `entity${index}`,
    type:type,
  };
}

// 生成100个实体
const entities = [];
for (let i = 0; i < 1000; i++) {
  entities.push(generateEntity(i));
}



// 生成随机边的函数
function generateLink(from, to) {
  const relationTypes = [
    '关联', '属于', '包含', '相似', '同义'
  ];
  const randomIndex = Math.floor(Math.random() * relationTypes.length);
  const relation = relationTypes[randomIndex];
  return {
    from,
    to,
    relation
  };
}

// 生成100条随机边并加入到links数组中
const links = [];
for (let i = 0; i < 1000; i++) {
  const from = Math.floor(Math.random() * 500) + "";
  const to = Math.floor(Math.random() * 500) + "";
  links.push(generateLink(from, to));
}

const data = {
  nodes: entities,
  links: links
};

// console.log(JSON.stringify(data))





/// 生成5代知识图谱
// 定义节点的类型和关系
const NODE_TYPE = "person";
const RELATION = ["父亲", "母亲", "兄弟姐妹", "儿子", "女儿", "配偶"];

// 生成随机关系
function randomRelation() {
    const idx = Math.floor(Math.random() * RELATION.length);
    return RELATION[idx];
}

// 生成节点信息
function generateNodes() {
    const nodes = [];
    for (let i = 1; i <= 100; i++) {
        const node = {"key": i.toString(), "text": `第${i}个人`, "type": NODE_TYPE};
        nodes.push(node);
    }
    return nodes;
}

// 生成关系信息
function generateLinks() {
    const links = [];
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            const idx = (i - 1) * 10 + j;
            if (i > 1) { // 与上一代建立联系
                const parentIdx = idx - 10;
                const parentType = randomRelation();
                const link = {"from": parentIdx.toString(), "to": idx.toString(), "relation": parentType};
                links.push(link);
            }
            if (i < 10) { // 与下一代建立联系
                const childIdx = idx + 10;
                const childType = randomRelation();
                const link = {"from": idx.toString(), "to": childIdx.toString(), "relation": childType};
                links.push(link);
            }
            if (j > 1) { // 与左边的兄弟姐妹建立联系
                const siblingIdx = idx - 1;
                const siblingType = "兄弟姐妹";
                const link = {"from": siblingIdx.toString(), "to": idx.toString(), "relation": siblingType};
                links.push(link);
            }
            if (j < 10) { // 与右边的兄弟姐妹建立联系
                const siblingIdx = idx + 1;
                const siblingType = "兄弟姐妹";
                const link = {"from": idx.toString(), "to": siblingIdx.toString(), "relation": siblingType};
                links.push(link);
            }
        }
    }
    return links;
}

// 生成并打印关系图谱
function generateRelationshipMap() {
    const nodes = generateNodes();
    const links = generateLinks();
    const relationshipMap = {"nodes": nodes, "links": links};
    console.log(JSON.stringify(relationshipMap));
}

// 调用函数
generateRelationshipMap();