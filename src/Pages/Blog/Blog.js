import React from 'react';

const Blog = () => {
    return (
        <div className='text-center mt-5 w-50 mx-auto mb-5'>
            <h3>Difference between authorization and authentication</h3>
            <h5><span className='text-decoration-underline'>Authorization:</span> <small> is a process by which access to a method or resource.It relies on the principal associated with a request through authentication is in a given security role.A security role can be explained as a logical grouping of users defined by the person who assembles the application. A deployer maps the security roles to security identities. Security identities may be principles or groups in the operational environment.</small> </h5>
            <h5><span className='text-decoration-underline'>Authentication:</span> <small> is the process of determining whether someone is who they sey they are. This is commonly done by asking for login credentials .Authentication is the first step of authorization so always comes first.For example, students of a particular university are required to authenticate Themselves before accessing the student link of the university official website. This is called authentication</small></h5>
            <hr />
            AND
            <hr />
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <h5><small>If you use Firebase Then Firebase give you extra application information and analytics. Firebase Makes it easy for your years to access there data from any device.Then you use This information easily And It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter. That's why i use firebase.</small></h5>
            <h5><small>When I don't use firebase than i use retina scans, voice recognition, and fingerprints.</small></h5>

            <hr />
            OR
            <hr />
            <h3>What other services does firebase provide other than authentication</h3>
            <h6>WithOut authentication firebase have more services like Hosting, Cloud Storage, Realtime Database, Cloud Functions, Cloud Firestore, Dynamic Links, Creash Reporting,Integration with other Services, Audience Segmentation etc.</h6>
        </div>
    );
};

export default Blog;