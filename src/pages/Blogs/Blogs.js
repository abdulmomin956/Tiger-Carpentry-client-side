import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-2/3 mx-auto mt-6">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3  text-primary  text-xl">
                                How will you improve the performance of a React Application?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td class="px-6 py-4 p-6">
                                Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI.To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-2/3 mx-auto mt-6">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-primary  text-xl">
                                What are the different ways to manage a state in a React application?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td class="px-6 py-4 p-6">
                                Developers of enterprise-level React applications know how crucial state management is to a coherent end-user experience.
                                Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind.
                                There are four main types of state we need to properly manage in our React app:
                                <tr> <span className='font-bold text-primary'>1.</span> Local (UI) state - Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.</tr>
                                <tr> <span className='font-bold text-primary'>2.</span> Global (UI) state - Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</tr>
                                <tr> <span className='font-bold text-primary'>3.</span>Server state - Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</tr>
                                <tr>  <span className='font-bold text-primary'>4.</span> URL state - Data that exists on our URLs, including the pathname and query parameters.</tr>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-2/3 mx-auto mt-6">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3  text-primary  text-xl">
                                How does prototypical inheritance work?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td class="px-6 py-4 p-6">
                                The Prototypal Inheritance is a method by which an object can inherit the properties and methods of another object.Generally To get and set an prototype of an object, we use the object.The object from where the properties are inherited is named prototype.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-2/3 mx-auto mt-6">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-primary  text-xl">
                                What is a unit test? Why should write unit tests?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td class="px-6 py-4 p-6">
                                Unit testing is a software development process in which the smallest testable parts of an application, called units.Unit tests are performed for proper management and sorting individually.One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-2/3 mx-auto my-6">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-primary  text-xl">
                                Search a product in array by name:
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td class="px-6 py-4 p-6">
                                <code>
                                    {
                                        `let arr = [
                                            { name:"string 1", value:"this", other: "that" },
                                            { name:"string 2", value:"this", other: "that" }
                                        ];
                                        
                                        let obj = arr.find(o => o.name === 'string 1');
                                        
                                        console.log(obj);`
                                    }
                                </code>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Blogs;