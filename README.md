# all-values

```javascript
import allValues from 'all-values';

return Promise.resolve({})
    .then((prev) => allValues({...prev, session: enigmaHelper.createSession() }))
    .then((prev) => allValues({...prev, applications: prev.session.global.getDocList() }))
    .then((prev) => allValues({...prev, result: prev.applications.map((doc) => ({ id: doc.qDocId, name: doc.qDocName })) }));
```

you can create an allValues object with your own promise framework

```javascript
import q from 'q';
import allValues from 'all-values';

let allValuesQ = allValues.create({ Promise: q });

return Promise.resolve({})
    .then((prev) => allValuesQ({...prev, session: enigmaHelper.createSession() }))
    .then((prev) => allValuesQ({...prev, applications: prev.session.global.getDocList() }))
    .then((prev) => allValuesQ({...prev, result: prev.applications.map((doc) => ({ id: doc.qDocId, name: doc.qDocName })) }));
```