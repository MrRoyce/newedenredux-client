'use strict';

require("bootstrap-webpack!./bootstrap.config.js");
require('./css/main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

const characters = {
    "top5Characters": [
        {
            "_id": "51fa2cf6abe8d06c34027b15",
            "__v": 871,
            "bloodline": "Achura",
            "characterId": "92618888",
            "gender": "Female",
            "name": "Mikan Konoe",
            "race": "Caldari",
            "random": [
                0.3135780319571495,
                0
            ],
            "wrongGender": true,
            "voted": false,
            "reports": 4,
            "losses": 164,
            "wins": 696
        },
        {
            "_id": "52ba3bfe5f91741e2a000487",
            "__v": 870,
            "bloodline": "Amarr",
            "characterId": "92318226",
            "gender": "Female",
            "name": "Fynn Rinah",
            "race": "Amarr",
            "random": [
                0.23629426513798535,
                0
            ],
            "wrongGender": true,
            "voted": false,
            "reports": 4,
            "losses": 178,
            "wins": 682
        },
        {
            "_id": "524b3bbd385965ef18002e8e",
            "__v": 871,
            "bloodline": "Jin-Mei",
            "characterId": "892348579",
            "gender": "Female",
            "name": "Kaiko Nakorim",
            "race": "Gallente",
            "random": [
                0.7866132673807442,
                0
            ],
            "wrongGender": true,
            "voted": false,
            "reports": 3,
            "losses": 186,
            "wins": 676
        },
        {
            "_id": "51d26f4dcf5094b96e007a43",
            "__v": 871,
            "bloodline": "Intaki",
            "characterId": "754618317",
            "gender": "Female",
            "name": "Sanya",
            "race": "Gallente",
            "random": [
                0.08912416966632009,
                0
            ],
            "wrongGender": true,
            "voted": false,
            "reports": 3,
            "losses": 191,
            "wins": 670
        },
        {
            "_id": "528faa1e611c720000000001",
            "__v": 869,
            "bloodline": "Intaki",
            "characterId": "90739448",
            "gender": "Female",
            "name": "Daishan Auergni",
            "race": "Gallente",
            "random": [
                0.8912443353328854,
                0
            ],
            "wrongGender": true,
            "voted": false,
            "reports": 4,
            "losses": 196,
            "wins": 665
        }
    ],
    "numCharacters": 4658,
    "vote": [
        {
            "_id": "550ff63a4f4df9000000015d",
            "characterId": "790736846",
            "name": "Saylana",
            "race": "Caldari",
            "bloodline": "Deteis",
            "gender": "Female",
            "random": [
                0.9732299048919231,
                0
            ],
            "__v": 142,
            "voted": false,
            "reports": 0,
            "losses": 64,
            "wins": 78
        },
        {
            "_id": "550ff6604f4df9000000015f",
            "characterId": "217786739",
            "name": "Funrinel",
            "race": "Caldari",
            "bloodline": "Deteis",
            "gender": "Female",
            "random": [
                0.5434670008253306,
                0
            ],
            "__v": 141,
            "voted": false,
            "reports": 0,
            "losses": 80,
            "wins": 61
        }
    ]
}
;

ReactDOM.render(
  <Home characters={characters} />,
  document.getElementById('app')
);
