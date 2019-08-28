(function () {
    const talkHeaders = document.getElementsByClassName('talk-details-header');
    const talkDetailContainers = document.getElementsByClassName('talk-details-detail-container');
    const talkDetailHeaderExpandIndicators = document.getElementsByClassName('talk-details-header-expand-indicator');
    const talkDetailContainerStatuses = [];

    function update() {
        for (let i = 0; i < talkDetailContainers.length; i++) {
            const expand = !!talkDetailContainerStatuses[i];
            talkDetailHeaderExpandIndicators[i].textContent = expand ? '▲' : '▼';
            talkDetailContainers[i].style = expand ? "display: flex" : "display: none";
        }
    }

    for (let i = 0; i < talkHeaders.length; i++) {
        talkHeaders[i].addEventListener('click', function () {
            talkDetailContainerStatuses[i] = !talkDetailContainerStatuses[i];
            update();
        });
    }

    update();
})();
