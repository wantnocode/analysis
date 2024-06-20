const graph_template = {
    "key": 'key',
    "nodeType": 'type',
    "nodeText": 'text',
    "from": 'from',
    "to": 'to',
    "linkType": 'type',
    "linkText": 'text',
};

const bank_records_template = {
    "key": ['jyf_yhkh','jyds_yhkh'],  //jyds_yhkh //jyf_yhkh
    "nodeType": 'type',  // account person 
    "nodeText": 'text', // jyds_mc // jyf_mc
    "from": 'from', //jyf_yhkh
    "to": 'to',  // jyds_yhkh
    "linkType": 'type', // transaction
    "linkText": 'text', //jyje
}

export const templates = {
	"graph_template":graph_template,
	"bank_records_template":bank_records_template,
}
	

