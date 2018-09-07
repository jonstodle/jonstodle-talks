(function () {
        const talkListElement = document.getElementById('talk-list');
        let talks = [
            {
                "name": "Realm",
                "date": "March 2017",
                "resources": [
                    {
                        "title": "Slides",
                        "link": "realm/index.html"
                    },
                    {
                        "title": "Code",
                        "link": "https://github.com/jonstodle"
                    },
                ],
                "expanded": false
            },
            {
                "name": "Rx",
                "date": "April 2017",
                "resources": [
                    {
                        "title": "Slides",
                        "link": "realm/index.html"
                    },
                    {
                        "title": "Code",
                        "link": "https://github.com/jonstodle"
                    },
                ],
                "expanded": true
            },
        ];

        function createElement(name, attributes, children, handlers) {
            const element = document.createElement(name);

            if (!!attributes) {
                for (const key of Object.keys(attributes)) {
                    element.setAttribute(key, attributes[key]);
                }
            }

            if (!!children) {
                for (const child of children) {
                    if (typeof child === 'string') {
                        element.appendChild(document.createTextNode(child))
                    } else {
                        element.appendChild(child);
                    }
                }
            }

            if (!!handlers) {
                for (const eventName of Object.keys(handlers)) {
                    element.addEventListener(eventName, handlers[eventName]);
                }
            }

            return element;
        }

        function createImageDetailsItems(talkList) {
            let items = [];

            for (const talk of talkList) {
                const talkDetails = [
                    createElement(
                        'div',
                        {"class": "talk-details-header"},
                        [
                            createElement('h2', {"class": "talk-details-header-title"}, [talk.name]),
                            createElement('span', {"class": "talk-details-header-date"}, [talk.date]),
                            createElement('span', null, [talk.expanded ? '\u25B2' : '\u25BC'])
                        ],
                        {
                            "click": function () {
                                talk.expanded = !talk.expanded;
                                render();
                            }
                        }
                    )
                ];

                if (talk.expanded && !!talk.resources) {
                    let details = [];

                    for (const resource of talk.resources) {
                        details.push(createElement(
                            'a',
                            {
                                "class": "talk-details-link",
                                "href": resource.link
                            },
                            [resource.title]
                        ));
                    }

                    talkDetails.push(createElement(
                        'div',
                        {"class": "talk-details-detail-container"},
                        details
                    ));
                }

                items.push(createElement(
                    'section',
                    {"class": "talk-details-container"},
                    talkDetails
                ));
            }

            return items;
        }

        function render() {
            talkListElement.innerHTML = "";

            for (const item of createImageDetailsItems(talks)) {
                talkListElement.appendChild(item);
            }
        }

        render();
    }

)();