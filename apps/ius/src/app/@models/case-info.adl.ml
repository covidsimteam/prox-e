module covhub.cases
{
    struct Coordinates {
        Double xLat;
        Double yLng;
        Double zAlt;
        Double time;
    };

    struct CaseState {

        Bool aFormFilled;

        Int16 numberOfContacts;
        Int16 numberOfB1Forms;
        Int16 numberOfB2Forms;
        Int16 numberOfSwabs;
        Int16 numberOfPositiveContacts;
        
        String sourceOfInfection;

        Coordinates placeOfInfection;
    };

    struct Information {

        Coordinates caseCoordinates;

        String reportingInstitution;
        String nameOfCase;
        String phoneNumber;
        String province;
        String district;
        String municipality;
        String wardNumber;
        String tole;
        String caseInvestigator;

        CaseState caseState;
    };

};