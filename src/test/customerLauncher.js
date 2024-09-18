(function () {
    const POST_MESSAGE_TYPES = {
      customInit: 'MarvinJS.customInit',
      exportStructure: 'MarvinJS.exportStructure',
      importStructure: 'MarvinJS.importStructure',
      pasteStructure: 'MarvinJS.pasteStructure',
      isEmpty: 'MarvinJS.isEmpty',
      clear: 'MarvinJS.clear',
      on: {
        molchange: 'MarvinJS.on.molchange',
      },
    };
  
    const iframe = window.parent;
    const marvin = window.marvin;
  
    let customInitPromiseResolve;
    const customInitPromise = new Promise((resolve) => {
      customInitPromiseResolve = resolve;
    });
  
    function _sendPostMessage(type, payload, id) {
      iframe.postMessage({ type, payload, id }, '*');
    }
  
    window.addEventListener('message', (event) => {
        try {
            const { type, payload, id } = event.data;
            switch(type) {
                case POST_MESSAGE_TYPES.customInit:
                    customInitPromiseResolve({
                        customInitEventId: id,
                        license: payload.license,
                        services: payload.services,
                        templateUrl: payload.templateUrl,
                        toolbars: payload.toolbars,
                    });
                    break;
                case POST_MESSAGE_TYPES.exportStructure:
                    marvin.sketcherInstance
                    .exportStructure
                    .apply(marvin.sketcherInstance, payload)
                    .then(function(data) {
                        _sendPostMessage(POST_MESSAGE_TYPES.exportStructure, data, id);
                    });
                    break;
                case POST_MESSAGE_TYPES.importStructure:
                    marvin.sketcherInstance
                    .importStructure
                    .apply(marvin.sketcherInstance, payload)
                    .then(function(data) {
                        _sendPostMessage(POST_MESSAGE_TYPES.importStructure, data, id);
                    });
                    break;
                case POST_MESSAGE_TYPES.pasteStructure:
                    marvin.sketcherInstance
                    .pasteStructure
                    .apply(marvin.sketcherInstance, payload)
                    .then(function(data) {
                        _sendPostMessage(POST_MESSAGE_TYPES.pasteStructure, data, id);
                    });
                    break;
                case POST_MESSAGE_TYPES.isEmpty: {
                    const isEmpty = marvin.sketcherInstance.isEmpty.apply(marvin.sketcherInstance, payload);
                    _sendPostMessage(POST_MESSAGE_TYPES.isEmpty, isEmpty, id);
                    break;
                }
                case POST_MESSAGE_TYPES.clear: {
                    marvin.sketcherInstance
                    .clear
                    .apply(marvin.sketcherInstance, payload);
                    break;
                }
                case POST_MESSAGE_TYPES.on.molchange: {
                    marvin.sketcherInstance
                    .on('molchange', function() {
                        _sendPostMessage(POST_MESSAGE_TYPES.on.molchange);
                    });
                    break;
                }
            }
        } catch(e) {
            console.log('MarvinJS customLauncher error: ', e);
        }
    }, false);
  
    window.sketchOnLoad = function () {
      customInitPromise.then(({ customInitEventId, license, services, templateUrl, toolbars }) => {
        if (marvin.Sketch.isSupported()) {
          marvin.Sketch.license(license, true);
          marvin.sketcherInstance = new marvin.Sketch('sketch');
          marvin.sketcherInstance.setServices(services);
          marvin.sketcherInstance.setDisplaySettings({
            templateurl: templateUrl,
            toolbars: toolbars,
          });
          _sendPostMessage(POST_MESSAGE_TYPES.customInit, true, customInitEventId);
        } else {
          _sendPostMessage(POST_MESSAGE_TYPES.customInit, false, customInitEventId);
        }
      });
    };
  })();
  