import React from 'react';

import { Button, Card, Elevation, Tag, Divider, H4 } from "@blueprintjs/core";

function TaskPreviewCard(props) {
    return (
        <Card style={{ marginTop: "15px" }} interactive={true} elevation={Elevation.TWO}>
            <H4><a href="#">Tổng quan công việc</a></H4>
            <p>Card content</p>
            <Button>Submit</Button>
        </Card>
    )
}

function ImportantCard(props) {
    return (
        <Card style={{ marginTop: "15px" }} interactive={true} elevation={Elevation.TWO}>
            <H4><a href="#">Công việc quan trọng</a></H4>
            <p><Tag>Công việc 1</Tag></p>
            <p><Tag>Công việc 2</Tag></p>
            <p><Tag>Công việc 3</Tag></p>
        </Card>
    )
}

function ReminderCard(params) {
    return (
        <Card style={{ marginTop: "15px" }} interactive={true} elevation={Elevation.TWO}>
            <H4><a href="#">Nhắc nhở</a></H4>
            <p>Card content</p>
            <Button>Submit</Button>
        </Card>
    )
}

function DiaryCard(params) {
    return (
        <Card style={{ marginTop: "15px" }} interactive={true} elevation={Elevation.TWO}>
            <H4><a href="#">Nhật ký</a></H4>
            <p>Card content</p>
            <Button>Submit</Button>
        </Card>
    )
}

export function Home(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8">
                    <TaskPreviewCard />
                </div>
                <div className="col-4">
                    <ImportantCard />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <ReminderCard />
                </div>
                <div className="col-6">
                    <DiaryCard />
                </div>
            </div>
        </div>
    );
}