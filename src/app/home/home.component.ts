/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit, Inject } from "@angular/core";


// เรียกใช้งาน Service ที่สร้างขึ้น
import { UserServiceService } from '../user-service.service';


@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    alluser: any = [];
    constructor(
        private userService: UserServiceService
    ) { }

    ngOnInit() {
        this.showAllUser();

    }

    showAllUser() {
        this.alluser = [];
        this.userService.getAllUser()
        .then((results: any) => {
            if(results.ok) {
                this.alluser = results.rows;
                console.log(this.alluser);
            } else {
                console.log(JSON.stringify(results.error));
            }
        })
        .catch(() => {
            console.log("Server Error");
        })
    }
}
