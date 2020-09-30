module covhub.steps
{
  struct Step1
  {
    Bool coordinatorInitiated;
    Bool coordinatorSubmitted;
    Bool yellowCellsInititated;
    Vector<Bool> yellowCellsUpdated;
    Vector<Bool> yellowCellsFilled;
    Bool caseInvestigatorAssigned;
    Bool oneDayReached;
    Bool twoDaysReached;
  };

  struct StepStats
  {

    Vector<String> sourcesOfInfection;
    Vector<String> placesOfInfection;

    Int16 numberOfContacts;

  };

  struct Step2
  {

    String caseName;
    Bool caseSelected;

    Bool aFormInitiated;
    Bool aFormFilled;

    Bool yellowUpdateStarted;
    StepStats stepStats;
    Bool yellowUpdateFinished;

  };

  struct Step3
  {

    String contactTracer;
    Int16 numberOfB1Forms;
    Int16 numberOfContacts;

    String caseName;
    Bool caseSelected;

    Vector<String> b1FormsInitiated;
    Vector<String> b1FormsFilled;

    Bool yellowUpdateStarted;
    StepStats stepStats;
    Bool yellowUpdateFinished;

  };

  struct Step4
  {

    String contactFollower;

    Int16 fourteenDayCounter;
    Int16 numberOfB2Forms;
    Int16 numberOfContacts;

    String caseName;
    Bool caseSelected;

    Vector<String> b2FormsInitiated;
    Vector<String> b2FormsFilled;

    Bool yellowUpdateStarted;
    StepStats stepStats;
    Bool yellowUpdateFinished;
  };

  struct Step5
  {

    String labPersonnel;
    Int16 sixDayCounter;

    Bool labFormFilled;
    Bool sampleCollected;

    Bool printed;
    Bool sentToLab;
  };

  struct Step6
  {
    Bool positive;
    Int16 sevenDayCounter;
    Vector<String> contacts;
    Bool allNotified;
  };

};

