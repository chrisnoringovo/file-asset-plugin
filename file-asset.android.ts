// alt1 can I npm install utils/utils?
import * as utils from "utils/utils";

// alt 2, borrow implementation of application from utils/utils
/*
function getApplication() {
        if (!nativeApp) {
            if (com.tns.NativeScriptApplication) {
                nativeApp = com.tns.NativeScriptApplication.getInstance();
            }
            if (!nativeApp) {
                var application = require("application");
                nativeApp = application.android.nativeApp;
                if (!nativeApp) {
                    var clazz = java.lang.Class.forName("android.app.ActivityThread");
                    if (clazz) {
                        var method = clazz.getMethod("currentApplication", null);
                        if (method) {
                            nativeApp = method.invoke(null, null);
                        }
                    }
                }
            }
            if (!nativeApp) {
                throw new Error("Failed to retrieve native Android Application object. If you have a custom android.app.Application type implemented make sure that you've called the '<application-module>.android.init' method.");
            }
        }
        return nativeApp;
    }

    which would mean we do getApplication().getAssets()
*/


export function getTextFromAsset(fromPath:string): string {
    const text = new java.lang.StringBuilder();
    let bufferedReader: java.io.BufferedReader;
    let inputStream: InputStream;

    try {
        let assetManager = utils.ad.getApplicationContext().getAssets();
        inputStream = am.open(fromPath);

        bufferedReader = new java.io.BufferedReader(inputStream);
        let line: string = '';
        while ((line = bufferedReader.readLine()) != null) {
            text.append(line);
            android.util.Log.i('Test', `text : ${text} : end`);
            text.append('\n');
        }
    }
    catch (e) {
        e.printStackTrace();
    }
    finally {
        bufferedReader.close();
    }

    return text.toString();
}
