class BubbleSorter {
    constructor(arrayToSort, comparator) {
        this.arr = arrayToSort;
        this.comparator = comparator;
        this.reset();
    }

    reset() {
        this.patientInd = 0;
    }

    oneTick() {
        for (let i = this.patientInd + 1; i < this.arr.size(); i++) {
            let patient = this.arr.get(this.patientInd);
            let toComp = this.arr.get(i);
//            console.log("Comparing, ", patient, toComp);
            if (this.comparator(patient, toComp) > 0) {
                this.arr.set(toComp, this.patientInd);
                this.arr.set(patient, i);
                return true;
            }
        }
        this.patientInd += 1;
        if (this.patientInd > (this.arr.size() - 1)) {
            return false;
        } else {
            return true;
        }
        
    }
}
