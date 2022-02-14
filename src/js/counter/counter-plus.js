import refs from "../refs/refs";

const initValueItemNum = {
    valueHome: 400,
    valueSchool: 7,
    valueCaffe: 30,
    valueBussines: 6,

};
let intervalIdHome = null;
let intervalIdSchool = null;
let intervalIdCaffe = null;
let intervalIdBussines = null;

refs.favouriteListHome.textContent = refs.favouriteListHome.textContent - initValueItemNum.valueHome;
refs.favouriteListSchool.textContent = refs.favouriteListSchool.textContent - initValueItemNum.valueSchool;
refs.favouriteListCaffe.textContent = refs.favouriteListCaffe.textContent - initValueItemNum.valueCaffe;
refs.favouriteListBussines.textContent = refs.favouriteListBussines.textContent - initValueItemNum.valueBussines;


const observerHome = new IntersectionObserver(observerCbHome, { threshold: 0.1 });
const observerSchool = new IntersectionObserver(observerCbSchool, { threshold: 0.1 });
const observerCaffe = new IntersectionObserver(observerCbCaffe, { threshold: 0.1 });
const observerBussines = new IntersectionObserver(observerCbBussines, { threshold: 0.1 });

observerHome.observe(refs.favouriteListHome);
observerSchool.observe(refs.favouriteListSchool);
observerCaffe.observe(refs.favouriteListCaffe);
observerBussines.observe(refs.favouriteListBussines);


function observerCbHome(entries) {
    intervalCb({
        entries,
        refs: refs.favouriteListHome,
        previosValue: 950,
        valueLoading: document.body.clientWidth < 1199 ? 900 : 500,
        time: 0.1,
        intervalId: intervalIdHome,
    });
}
function observerCbSchool(entries) {
    intervalCb({
        entries,
        refs: refs.favouriteListSchool,
        previosValue: 20,
        valueLoading: document.body.clientWidth < 1199 ? 12 : 2,
        time: 100,
        intervalId: intervalIdSchool,
    });
}
function observerCbCaffe(entries) {
    intervalCb({
        entries,
        refs: refs.favouriteListCaffe,
        previosValue: 60,
        valueLoading: document.body.clientWidth < 1199 ? 44 : 34,
        time: 100,
        intervalId: intervalIdCaffe,
    });
}
function observerCbBussines(entries) {
    intervalCb({
        entries,
        refs: refs.favouriteListBussines,
        previosValue: 25,
        valueLoading: document.body.clientWidth < 1199 ? 17 : 2,
        time: 100,
        intervalId: intervalIdBussines,
    });
}

function intervalCb(config) {
    let { entries, refs, previosValue, valueLoading, time, intervalId } = config;
    
    entries.forEach(el => {

        if (el.isIntersecting && refs.textContent < previosValue) {

            intervalId = setInterval(() => {
                valueLoading += 1;
                refs.textContent = valueLoading;

                if (valueLoading > previosValue - 1) {
                    clearInterval(intervalId);
                }

            }, time);
        }
    });
}