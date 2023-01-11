import http from "k6/http";
import {check, sleep, group} from "k6";

export const options = {
    stages: [
        {duration: '30s', target: 20},
        {duration: '1m30s', target: 10},
        {duration: '20s', target: 0},
    ],
};


export default function (data) {
    const baseUrl = "http://localhost";
    group("home", function () {
        let res;
        res = http.get(baseUrl + "/");
        check(res, {
            "status is 200": (r) => r.status === 200,
        });
        sleep(0.02);
    });

    group("api home", function () {
        let res;

        res = http.get(baseUrl + "/api");
        check(res, {
            "status is 200": (r) => r.status === 200,
        });
        sleep(0.02);
    });
}