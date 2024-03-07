import PropTypes from 'prop-types';
import styles from './Documentation.module.css';

const Documentation = () => {
    return (
        <div className={styles.container}>
            <div id='root'>
                <h2>Resources</h2>
                <h3>Root</h3>
                <p>The Root resource provides information on all resources of API.</p>
                <b>Examples request:</b><br />
                <code>
                    http://localhost:3001/api/
                </code><br />
                <b>Examples response:</b><br />
                <pre><code>
                    {
`{
    "hostiles": "http:/localhost:3001/api/hostiles/",
    "abilities": "http:/localhost:3001/api/abilities/",
    "chipsets": "http:/localhost:3001/api/chipsets/",
    "locations": "http:/localhost:3001/api/locations/",
    "weapons": "http:/localhost:3001/api/weapons/"
}`
                    }
                </code></pre><br />
                <b>Attributes:</b><br />
                <ul>
                    <li><code>hostiles</code> <i>string</i> - The URL root for Hostiles resources.</li>
                    <li><code>abilities</code> <i>string</i> - The URL root for Abilities resources.</li>
                    <li><code>chipsets</code> <i>string</i> - The URL root for Chipsets resources.</li>
                    <li><code>locations</code> <i>string</i> - The URL root for Locations resources.</li>
                    <li><code>weapons</code> <i>string</i> - The URL root for Weapons resources.</li>
                </ul><br /><br />
            </div>
            <div id='hostiles'>
                <h3>Hostiles</h3>
                <p>The Hostiles resource provides individual information about all hostiles of API.</p>
                <b>Endpoints:</b><br />
                <ul>
                    <li><code>/hostiles/</code> - get all the hostiles resources.</li>
                    <li><code>/hostiles/:id</code> - get the individual hostile resource.</li>
                </ul><br />
                <b>Examples request:</b><br />
                <code>
                    http://localhost:3001/api/hostiles/1/
                </code><br />
                <b>Examples response:</b><br />
                <pre><code>
                    {
`{
    "image_URL": "https://static.wikia.nocookie.net/prey/images/
                  8/87/Xpru13.jpg/revision/latest?cb=20170126175344",
    "immunity": [
        "EMP"
    ],
    "name": "Mimic",
    "research_count": 6,
    "scannable_powers": [
        "Mimic Matter I, II, III"
    ],
    "scientific_name": "Typhon cacoplasmus",
    "weaknesses": [
        "GLOO",
        "Q-Beam"
    ]
}`
                    }
                </code></pre><br />
                <b>Attributes:</b><br />
                <ul>
                    <li><code>image_URL</code> <i>string</i> - The URL of hostile image.</li>
                    <li><code>immunity</code> <i>array</i> - An array of hostile immunity.</li>
                    <li><code>name</code> <i>string</i> - The name of this hostile.</li>
                    <li><code>research_count</code> <i>number</i> - The number of research scans required.</li>
                    <li><code>scannable_powers</code> <i>array</i> - An array of hostile scannable powers.</li>
                    <li><code>scientific_name</code> <i>string</i> - The scientific name of this hostile.</li>
                    <li><code>weaknesses</code> <i>array</i> -  An array of hostile weaknesses.</li>
                </ul><br /><br />
            </div>
            <div id='abilities'>
                <h3>Abilities</h3>
                <p>The Abilities resource provides individual information about all abilities of API.</p>
                <b>Endpoints:</b><br />
                <ul>
                    <li><code>/abilities/</code> - get all the abilities resources.</li>
                    <li><code>/abilities/:id</code> - get the individual ability resource.</li>
                </ul><br />
                <b>Examples request:</b><br />
                <code>
                    http://localhost:3001/api/abilities/1/
                </code><br />
                <b>Examples response:</b><br />
                <pre><code>
                    {
`{
    "name": "Scientist",
    "type": "Human",
    "includes": [
        {
            "name": "Physician I",
            "neuromods_count": 1,
            "ability_tiers": [
                {
                    "name": "Physician II",
                    "neuromods_count": 3
                },
                {
                    "name": "Metabolic Boost",
                    "neuromods_count": 2
                },
                {
                    "name": "Necropsy",
                    "neuromods_count": 4
                }
            ]
        },
        {
            "name": "Hacking I",
            "neuromods_count": 1,
            "ability_tiers": {
                "name": "Hacking II",
                "neuromods_count": 4,
                "ability_tiers": {
                    "name": "Hacking III",
                    "neuromods_count": 6,
                    "ability_tiers": {
                        "name": "Hacking IV",
                        "neuromods_count": 8
                    }
                }
            }
        }
    ]
}`
                    }
                </code></pre><br />
                <b>Attributes:</b><br />
                <ul>
                    <li><code>name</code> <i>string</i> - The name of this ability.</li>
                    <li><code>type</code> <i>string</i> - The type of ability (human or typhons).</li>
                    <li><code>includes</code> <i>array</i> - A field containing abilities.</li>
                    <li><code>neuromods_count</code> <i>number</i> - A needed count of neuromods for the ability.</li>
                    <li><code>ability_tiers</code> <i>object</i> - The next ability tiers.</li>
                </ul><br /><br />
            </div>
            <div id='chipsets'>
                <h3>Chipsets</h3>
                <p>The Chipsets resource provides individual information about all chipsets of API.</p>
                <b>Endpoints:</b><br />
                <ul>
                    <li><code>/chipsets/</code> - get all the chipsets resources.</li>
                    <li><code>/chipsets/:id</code> - get the individual chipset resource.</li>
                </ul><br />
                <b>Examples request:</b><br />
                <code>
                    http://localhost:3001/api/chipsets/1/
                </code><br />
                <b>Examples response:</b><br />
                <pre><code>
                    {
`{
    "name": "ARTX PROPULSION GEN 1",
    "type": "Suit",
    "description": "Increases the Artax Propulsion System's glide speed."
}`
                    }
                </code></pre><br />
                <b>Attributes:</b><br />
                <ul>
                    <li><code>name</code> <i>string</i> - The name of this chipset.</li>
                    <li><code>type</code> <i>string</i> - The type of chipset (suit or psychoscope).</li>
                    <li><code>description</code> <i>string</i> - The description of chipset.</li>
                </ul><br /><br />
            </div>
            <div id='locations'>
                <h3>Locations</h3>
                <p>The Locations resource provides individual information about all locations of API.</p>
                <b>Endpoints:</b><br />
                <ul>
                    <li><code>/locations/</code> - get all the locations resources.</li>
                    <li><code>/locations/:id</code> - get the individual location resource.</li>
                </ul><br />
                <b>Examples request:</b><br />
                <code>
                    http://localhost:3001/api/locations/1/
                </code><br />
                <b>Examples response:</b><br />
                <pre><code>
                    {
`{
    "name": "G.U.T.S",
    "rooms": [
        "Cargo Tunnel",
        "Fuel Storage",
        "Magnetosphere Control Room",
        "Maintenance Tunnel",
        "Medical Bay"
    ],
    "quests": [
        "Detour",
        "Treasure Hunt"
    ],
    "connects": [
        "Psychotronics",
        "Shuttle Bay",
        "Arboretum",
        "Cargo Bay"
    ],
    "airlock": false,
    "med_bay": true,
    "crew_assigned": 6,
    "hostiles": [
        {
            "name": "Cystoid",
            "scientific_name": "None",
            "image_URL": "https://static.wikia.nocookie.net/prey/images
                          /1/17/Cystoid_Research.png/revision/latest?cb=20180709062536",
            "research_count": 2,
            "weaknesses": [
                "None"
            ],
            "immunity": [
                "None"
            ],
            "scannable_powers": [
                "Kinetic Blast I"
            ]
        },
        {
            "name": "Weaver",
            "scientific_name": "Typhon geneocratis",
            "image_URL": "https://static.wikia.nocookie.net/prey/images/
                          2/20/%D0%A2%D0%BA%D0%B0%D1%87.png/revision/
                          latest?cb=20170611134049&path-prefix=ru",
            "research_count": 4,
            "weaknesses": [
                "Nullwave",
                "Phychoshock"
            ],
            "immunity": [
                "EMP"
            ],
            "scannable_powers": [
                "Backlash I, II, III",
                "Phantom Genesis I, II"
            ]
        },
        {
            "name": "Telepath",
            "scientific_name": "Typhon psychocratis",
            "image_URL": "https://static.wikia.nocookie.net/prey/images/
                          3/31/5582.Prey_Telepath_Dec16.png-610x0.png/
                          revision/latest?cb=20161209160712",
            "research_count": 4,
            "scannable_powers": [
                "Psychoshock I, II, III",
                "Kinetic Blast I, II, III",
                "Mind Jack I, II, III"
            ],
            "weaknesses": [
                "Explosive",
                "Fire",
                "Nullwave"
            ],
            "immunity": [
                "Blacklash"
            ]
        }
    ]
}`
                    }
                </code></pre><br />
                <b>Attributes:</b><br />
                <ul>
                    <li><code>name</code> <i>string</i> - The name of this location.</li>
                    <li><code>rooms</code> <i>array</i> - An array of location rooms.</li>
                    <li><code>quests</code> <i>array</i> - An array of location quests.</li>
                    <li><code>connects</code> <i>array</i> - An array of locations to which this location is connected.</li>
                    <li><code>airlock</code> <i>boolean</i> - A boolean value indicating whether there is a airlock in this location.</li>
                    <li><code>med_bay</code> <i>boolean</i> - A boolean value indicating whether there is a med bay in this location.</li>
                    <li><code>crew_assigned</code> <i>number</i> - A count of assigned crew.</li>
                    <li><code>image_URL</code> <i>string</i> - The URL of hostile image.</li>
                    <li><code>immunity</code> <i>array</i> - An array of hostile immunity.</li>
                    <li><code>name in 'hostiles'</code> <i>string</i> - The name of this hostile.</li>
                    <li><code>research_count</code> <i>number</i> - The number of research scans required.</li>
                    <li><code>scannable_powers</code> <i>array</i> - An array of hostile scannable powers.</li>
                    <li><code>scientific_name</code> <i>string</i> - The scientific name of this hostile.</li>
                    <li><code>weaknesses</code> <i>array</i> -  An array of hostile weaknesses.</li>
                </ul><br /><br />
            </div>
            <div id='weapons'>
                <h3>Weapons</h3>
                <p>The Weapons resource provides individual information about all weapons of API.</p>
                <b>Endpoints:</b><br />
                <ul>
                    <li><code>/weapons/</code> - get all the weapons resources.</li>
                    <li><code>/weapons/:id</code> - get the individual weapon resource.</li>
                </ul><br />
                <b>Examples request:</b><br />
                <code>
                    http://localhost:3001/api/weapons/1/
                </code><br />
                <b>Examples response:</b><br />
                <pre><code>
                    {
`{
    "name": "GLOO",
    "primary_fire": "Glue",
    "firing_range": "Short",
    "rate_of_fire": "Moderate",
    "material_cost": {
        "0": {
            "mineral_material": 3
        },
        "1": {
            "synthetic_material": 3
        }
    },
    "material_yield": {
        "0": {
            "mineral_material": 1.5
        },
        "1": {
            "synthetic_material": 1
        }
    },
    "secondary_fire": "None"
}`
                    }
                </code></pre><br />
                <b>Attributes:</b><br />
                <ul>
                    <li><code>name</code> <i>string</i> - The name of this weapon.</li>
                    <li><code>primary_fire</code> <i>string</i> - The primary fire of this weapon.</li>
                    <li><code>firing_range</code> <i>string</i> - The firing range of this weapon.</li>
                    <li><code>rate_of_fire</code> <i>string</i> - The rate of fire of this weapon.</li>
                    <li><code>material_cost</code> <i>map</i> - The material cost of this weapon.</li>
                    <li><code>material_yield</code> <i>map</i> - The material yield of this weapon.</li>
                    <li><code>secondary_fire</code> <i>string</i> - The secondary fire of this weapon.</li>
                </ul>
            </div>
        </div>
    )
}

Documentation.propTypes = {
    text: PropTypes.string
}

export default Documentation;