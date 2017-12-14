/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit, Inject } from '@angular/core';

import { UserlevelService } from '../userlevel.service';

@Component({
    styleUrls: ['./about.component.scss'],
    templateUrl: './about.component.html'
})
export class AboutComponent {
    alluserLevel: any = [];
    UserLevelId: any;
    UserLevelName: any;
    isupdate: boolean = false;

    open: Boolean = false;
    constructor(
        private userlevelService: UserlevelService
    ) { }


    ngOnInit() {
        this.showAllUserLevel();

    }

    showAllUserLevel() {
        this.alluserLevel = [];
        this.userlevelService.getAllUserLevel()
            .then((results: any) => {
                if (results.ok) {
                    this.alluserLevel = results.rows;
                    console.log(this.alluserLevel);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }

    addData() {
        if (this.UserLevelId && this.UserLevelName) {
            this.userlevelService.save(this.UserLevelId, this.UserLevelName)
                .then((results: any) => {
                    if (results.ok) {
                        console.log("เพิ่มข้อมูลสำเร็จ");
                        this.showAllUserLevel();
                        this.open = false;
                    } else {
                        console.log("เพิ่มข้อมูลไม่สำเร็จ");
                    }
                })
                .catch(() => {
                    console.log("Server Error");
                })
        } else {
            console.log("กรุณากรอกข้อมูลให้ครบ");
        }
    }

    updateData() {
        if (this.UserLevelId && this.UserLevelName) {
            this.userlevelService.edit(this.UserLevelId, this.UserLevelName)
                .then((results: any) => {
                    if (results.ok) {
                        console.log("แก้ไขข้อมูลสำเร็จ");
                        this.showAllUserLevel();
                        this.open = false;
                    } else {
                        console.log("แก้ไขข้ออมูลไม่สำเร็จ");
                    }
                })
                .catch(() => {
                    console.log("Server Error");
                })
        } else {
            console.log("กรุณากรอกข้อมูลให้ครบ");
        }
    }

    showEdit(r) {
        this.isupdate = true;
        console.log(r);
        this.UserLevelId = r.ul_id;
        this.UserLevelName = r.ul_name;
        this.open = true;
    }

    deleteData(r) {
        console.log(r);
        this.UserLevelId = r.ul_id;
        if (this.UserLevelId) {
            this.userlevelService.remove(this.UserLevelId)
            .then((results: any) => {
                if (results.ok) {
                    this.showAllUserLevel();
                } else {
                    console.log(results.error)
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
        }
    }

    saveData() {
        if (this.isupdate) {
            this.updateData()
        } else {
            this.addData()
        }
    }



}
