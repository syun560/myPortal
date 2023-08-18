'use client'

import Script from 'next/script'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch("https://sheets.googleapis.com/v4/spreadsheets/1XBS6iBZR1AR3aECSuqHLRUQ5zz--6j82WnGPUwTb1lw/values/masterpiece?key=AIzaSyCi75dWmDldMwJZAuS7N1QIRrGVGTH4m8I")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch(() => alert("error"));
  }, []);

  return (
  <main className="bg-dark text-light">
    <div className="container shadow mt-3">
        <h1 className="border-bottom mb-3">syun560 page</h1>
        <div className="shadow trans row">
            <div className="col">
                <h2>Profile</h2>
                <ul>
                    <li>python/Django, VR, music and programming</li>
                </ul>
                
                <h2>Want to ...</h2>
                <ul>
                    <li>go to travel everywhere.</li>
                    <li>read many Books...</li>
                    <li>make smartphone app with React Native</li>
                    <li>make MarkDown blog system</li>
                    <li>edit movie</li>
                    <li></li>
                    <li>domain</li>
                </ul>
                
                <h2>Daily Works</h2>
                <ul>
                    <li>Upload video</li>
                    <li>WorkOut (Planking, etc..)</li>
                </ul>

                <h2>Google Sheets</h2>
                <a href="https://sheets.googleapis.com/v4/spreadsheets/1XBS6iBZR1AR3aECSuqHLRUQ5zz--6j82WnGPUwTb1lw/values/masterpiece?key=AIzaSyCi75dWmDldMwJZAuS7N1QIRrGVGTH4m8I">api</a>
                

                <h2>Works</h2>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name(click to demo page)</th>
                            <th scope="col">github</th>
                            <th scope="col">keywords</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><a href="https://syun560.github.io/midip2021/">MIDI Sequencer on browser</a></td>
                            <td><a href="https://github.com/syun560/mp2022">GitHub</a></td>
                            <td>
                                <span className="badge bg-dark">React</span>
                                <span className="badge bg-dark">TypeScript</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td><a href="https://gt-two.vercel.app/">Guitar Tablature Generator</a></td>
                            <td><a href="https://github.com/syun560/gt">GitHub</a></td>
                            <td>
                                <span className="badge bg-dark">React</span>
                                <span className="badge bg-dark">TypeScript</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>mahjoung assist tool</td>
                            <td>GitHub</td>
                            <td>
                                <span className="badge bg-dark">React</span>
                                <span className="badge bg-dark">TypeScript</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <h2>Links</h2>
                <ul>
                    <li><a href="https://github.com/syun560/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li></li>
                </ul>
                
                <h2>Music Room</h2>
                <ul>
                    <li>My First Song</li>
                </ul>

                <h2>Poems</h2>
                <p>I do what I want to do. Life is short.</p>
                <p>fight this situation...</p>

            </div>
            <div className="col">
                <h2>Time To Live</h2>
                <p id="RealtimeClockArea">00:00:00</p>
                <h2>Tasks</h2>
                <ul>
                    <li>need more information</li>
                    <li>android studio</li>
                </ul>
                <h2>Schedule</h2>

            </div>
        </div>
      </div>
    <Script src="js/clock.js"></Script>
    </main>
  )
}
