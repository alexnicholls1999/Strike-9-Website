function Strike9Events() {
    
    this.dialogs = {};

    var that = this;

    firebase.firestore().enablePersistence()
        .then(function() {
            return firebase.auth().signInAnonymously();
        })
        .then(function() {
            that.initTemplates();
            that.initRouter();
            that.initReviewDialog();
            that.initFilterDialog();
        }).catch(function(err) {
            console.log(err);
        })
};


Strike9Events.prototype.initRouter = function() {
    this.router = new Navigo();

    var that = this;
    this.router
        .on({
            '/': function() {
                that.updateQuery(that.filters);
            }
        })
        .on({
            '/setup': function() {
                that.viewSetup();
            }
        })
        .on({
            '/events/*': function() {
                const path = that.getCleanPath(document.location.pathname);
                const id = path.split('/')[2];
                that.viewEvents(id)
            }
        })
        .resolve();
    firebase
        .firestore()
        .collection('events')
        .limit(1)
        .onSnapshot(function(snapshot) {
            if (snapshot.empty) {
                that.router.navigate('/setup');
            }
        });
};

Strike9Events.prototype.getCleanPath = function(dirtyPath) {
    if(dirtyPath.startsWith('index.html')){
        return dirtyPath.split('/').slice(1).join("/");
    } else {
        return dirtyPath;
    }
}

Strike9Events.prototype.getFirebaseConfig = function() {
    return firebase.app().options;
}

window.onload = function() {
    window.app = new Strike9Events();
}