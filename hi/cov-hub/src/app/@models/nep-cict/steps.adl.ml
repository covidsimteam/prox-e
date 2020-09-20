module covhub.steps
{
    struct Step1 {
        Bool coordinatorInitiated;
        Bool coordinatorSubmitted;
        Bool yellowCellsInititated;
        Vector<Bool> yellowCellsUpdated;
        Vector<Bool> yellowCellsFilled;
        Bool caseInvestigatorAssigned;
        Bool oneDayReached;
        Bool twoDaysReached;
    };

    struct Step2Stats {

        Vector<String> sourcesOfInfection;
        Vector<String> placesOfInfection;

        Int16 numberOfContacts;
    };

    struct Step2 {

        String caseName;
        Bool caseSelected;

        Bool aFormInitiated;
        Bool aFormFilled;

        Bool yellowUpdateStarted;
        Step2Stats step2Stats;
        Bool yellowUpdateFinished;
    };

    struct Step3 {

        String contactTracer;
        Int16 numberOfB1Forms;
        Int16 numberOfContacts;

        String caseName;
        Bool caseSelected;

        Vector<String> b1FormsInitiated;
        Vector<String> b1FormsFilled;

        Bool yellowUpdateStarted;
        Step2Stats step2Stats;
        Bool yellowUpdateFinished;

    };

    struct Step4 {

        String contactFollower;
        Int16 numberOfB2Forms;
        Int16 numberOfContacts;

        String caseName;
        Bool caseSelected;

        Vector<String> b1FormsInitiated;
        Vector<String> b1FormsFilled;

        Bool yellowUpdateStarted;
        Step2Stats step2Stats;
        Bool yellowUpdateFinished;
    };
};
