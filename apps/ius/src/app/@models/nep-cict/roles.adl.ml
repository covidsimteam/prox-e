module covhub.roles 
{
    struct Admin {
        String domain;
        String id;
        String key;
    };

    struct CaseInvestigator {
        String id;
        Vector<String> aForms;
        Vector<String> aFormsStarted;
        Vector<String> aFormsFinished;
    };

    struct ContactTracer {
        String id;
        Vector<String> b1Forms;
    };

    struct ContactFollowup {
        String id;
        Vector<String> b2Forms;
    };

    struct Coordinator {
        String id;
        Vector<String> cases;
        Vector<CaseInvestigator> investigators;
    };

};