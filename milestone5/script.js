var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var container = document.querySelector(".container");
var getMyResume = document.querySelector("#generated-form");
var form = document.querySelector("#my-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var personName = document.querySelector("#name").value;
    var personContact = document.querySelector("#contact")
        .value;
    var personEmail = document.querySelector("#email")
        .value;
    var education = document.querySelector("#education")
        .value;
    var experience = document.querySelector("#experience")
        .value;
    var skills = document.querySelector("#skills").value;
    var username = document.querySelector("#username")
        .value;
    var uniquePath = "resume/".concat(username.replace(/\s+/g, "_"), "_cv.html");
    var generatedResumeDetail = "\n     <h1>My Shareable Resume Builder<h1>\n     <hr>\n      <h2>Personal Detail</h2>\n      <hr>\n      <p><b>Name:</b>".concat(personName, "</p><hr>\n      <p><b>Contact:</b>").concat(personContact, "</p><hr>\n      <p><b>Email:</b>").concat(personEmail, "</p><hr>\n\n      <h2>Education</h2><hr>\n      <p>").concat(education, "</p><hr>\n\n      <h2>Experience</h2><hr>\n      <p>").concat(experience, "</p><hr>\n\n      <h2>Skills</h2><hr>\n      <p>").concat(skills, "</p><hr>\n\n    ");
    if (getMyResume) {
        getMyResume.innerHTML = generatedResumeDetail;
        getMyResume.classList.remove("hidden");
        var buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttons-container";
        getMyResume.appendChild(buttonsContainer);
        var downloadButton = document.createElement("button");
        downloadButton.innerText = "Download As PDF";
        downloadButton.addEventListener("click", function () {
            window.print();
        });
        buttonsContainer.appendChild(downloadButton);
        var shareLinkButton = document.createElement("button");
        shareLinkButton.innerText = "Share Link";
        shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
            var shareableLink, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        shareableLink = "https://yourdomain.com/resume/".concat(personName.replace(/\s+/g, "_"), "_cv.html");
                        return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                    case 1:
                        _a.sent();
                        alert("Shareable link copied to clipboard");
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log("copy link failed ".concat(err_1));
                        alert("Failed to copy linl.Please try again.");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        buttonsContainer.appendChild(shareLinkButton);
    }
    else {
        alert("Please enter missing element");
    }
});
