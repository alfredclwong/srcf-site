export const descriptions = {};
const _descriptions = {
    'Mobile Audio System': [
        'Test 1',
        'Test 2',
        'sahgfdksagna',
    ],
    'Quadcopter Control': [
        '',
        '',
        '',
    ],
    'Embedded Tetris': [
        ,
    ],
    'Ordinary Differential Equations': [
        ,
    ],
    'Golden Section Search': [
        ,
    ],
    'Three Body Problem': [
        ,
    ],
    'Public-Key Cryptography': [
        ,
    ],
    'CFU Tracker for Water Testing': [],
    'APV-MCTS for a newly released TCG': [],
};
const sections = [
    'Introduction',
    'Method',
    'Discussion',
];

for (const [project, description] of Object.entries(_descriptions)) {
    descriptions[project] = [];
    for (const i in sections) {
        descriptions[project].push(<h3 key={sections[i]}>{sections[i]}</h3>);
        descriptions[project].push(<div key={sections[i]+'-'+i}>{description[i]}</div>);
    }
}
