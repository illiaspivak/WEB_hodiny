// Saves options to chrome.storage.sync.
const saveOptions = function () {
    const weatherKey = document.getElementById('weatherKey').value
    const geoKey = document.getElementById('geoKey').value

    chrome.storage.sync.set({
        weatherAPIKey: weatherKey,
        geoAPIKey: geoKey
    }, () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');

        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

const restoreOptions = function () {
    chrome.storage.sync.get(
        ['weatherAPIKey', 'geoAPIKey']
    , (items) => {
        if(items.weatherAPIKey){
            document.getElementById('weatherKey').value = items.weatherAPIKey;
        }
        if(items.geoAPIKey){
            document.getElementById('geoKey').value = items.geoAPIKey;
        }        
    });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('submitOptions').addEventListener('click', saveOptions);

